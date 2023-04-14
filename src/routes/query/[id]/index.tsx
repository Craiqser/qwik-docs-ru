import { component$ } from '@builder.io/qwik';
import { routeLoader$, server$ } from '@builder.io/qwik-city';
import { createClient } from '@supabase/supabase-js';

export const approveId = server$(async function (id: string, approved: boolean) {
  const supabase = createClient(this.env.get('SUPABASE_URL')!, this.env.get('SUPABASE_KEY')!);
  await supabase.from('search_queries').update({ approved }).filter('id', 'eq', id);
});

export const useQueryData = routeLoader$(async (ev) => {
  if (ev.query.get('token') !== ev.env.get('DEBUG_TOKEN')) {
    throw ev.redirect(308, '/');
  }
  const query_id = ev.params.id;
  const supabase = createClient(ev.env.get('SUPABASE_URL')!, ev.env.get('SUPABASE_KEY')!);
  const output = await supabase
    .from('search_queries')
    .select('query, embedding, results, output, model, approved')
    .filter('id', 'eq', query_id)
    .limit(1);

  if (!output.data || output.data.length !== 1) {
    return null;
  }
  const entry = output.data[0];

  const all_results = await supabase.rpc('match_docs_8', {
    query_text: entry.query,
    query_embedding: entry.embedding,
    match_count: 40,
    similarity_threshold: 0.6,
  });

  all_results.data.forEach((result: any) => {
    result.included = entry.results.some((r: any) => r.key === result.key);
  });

  const output2 = await supabase.rpc('match_output_9', {
    match_id: query_id,
  });
  return {
    id: query_id,
    query: entry.query,
    results: all_results,
    similar: output2.data,
    output: entry.output,
    model: entry.model,
    approved: entry.approved,
  };
});

export default component$(() => {
  const queryData = useQueryData().value;
  if (queryData === null) {
    return <div>Query not found</div>;
  }

  return (
    <div>
      <h1>Запрос: {queryData.query}</h1>
      <h2>Модель: {queryData.model}</h2>
      <div>
        <h2>Вывод:</h2>
        <pre>{queryData.output}</pre>
      </div>

      <div>
        <div>Состояние: {queryData.approved ? 'УТВЕРЖДЕН' : 'НЕ УТВЕРЖДЕН'}</div>
        <div>
          <button
            class="block border p-5 "
            onClick$={async () => {
              await approveId(queryData.id, !queryData.approved);
              location.reload();
            }}
          >
            {!queryData.approved ? 'УТВЕРДИТЬ' : 'СНЯТЬ УТВЕРЖДЕНОСТЬ'}
          </button>
        </div>
      </div>
      <button>Утвердить</button>
      <h2>Результаты</h2>
      <table class="text-xs table-auto border-collapse border border-slate-500">
        <tbody>
          {queryData.results.data.map((result: any, i: any) => (
            <tr
              class={{
                'border-spacing-5': true,
                'bg-green-400': result.included,
              }}
            >
              <td class="border border-slate-600">{i}</td>
              <td class="border border-slate-600">{(result.similarity as number).toFixed(4)}</td>
              <td class="border border-slate-600">
                {result.file.replace('packages/docs/src/routes/', '')}:{result.line}
              </td>
              <td class="border border-slate-600">{result.content}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Похожие запросы</h2>
      <table class="text-xs table-auto border-collapse border border-slate-500">
        <tbody>
          {queryData.similar.map((result: any) => (
            <tr
              class={{
                'border-spacing-5': true,
                'bg-red-400': result.rate < 0,
                'bg-green-400': result.rate > 0,
              }}
            >
              <td class="border border-slate-600">{result.id}</td>
              <td class="border border-slate-600">{result.query}</td>
              <td class="border border-slate-600">{result.message}</td>
              <td class="border border-slate-600">{result.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});
