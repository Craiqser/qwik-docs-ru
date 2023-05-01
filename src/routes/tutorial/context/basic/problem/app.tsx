import { component$, createContextId, useContextProvider, useStore } from '@builder.io/qwik';

interface TodosStore {
  items: string[];
}
export const todosContext = createContextId<TodosStore>('Todos');
export default component$(() => {
  useContextProvider(
    todosContext,
    useStore<TodosStore>({
      items: ['Выучить Qwik', 'Написать Qwik-приложение', 'Профит'],
    })
  );

  return <Items />;
});

export const Items = component$(() => {
  // Замените это на извлечение контекста.
  const todos = { items: [] };
  return (
    <ul>
      {todos.items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
});
