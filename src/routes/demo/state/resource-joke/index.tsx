import {
  component$,
  useResource$,
  Resource,
  useSignal,
} from '@builder.io/qwik';

export default component$(() => {
  const query = useSignal('busy');
  const jokes = useResource$<{ value: string }[]>(
    async ({ track, cleanup }) => {
      track(() => query.value);
      // Хорошей практикой является использование `AbortController` для прерывания получения данных, если
      // поступает новый запрос. Мы создаем новый `AbortController` и регистрируем `cleanup`-функцию,
      // которая вызывается при повторном запуске этой функции.
      const controller = new AbortController();
      cleanup(() => controller.abort());

      if (query.value.length < 3) {
        return [];
      }

      const url = new URL('https://api.chucknorris.io/jokes/search');
      url.searchParams.set('query', query.value);

      const resp = await fetch(url, { signal: controller.signal });
      const json = (await resp.json()) as { result: { value: string }[] };

      return json.result;
    }
  );

  return (
    <>
      <label>
        Запрос: <input bind:value={query} />
      </label>
      <button>Поиск</button>
      <Resource
        value={jokes}
        onPending={() => <>Загрузка...</>}
        onResolved={(jokes) => (
          <ul>
            {jokes.map((joke, i) => (
              <li key={i}>{joke.value}</li>
            ))}
          </ul>
        )}
      />
    </>
  );
});
