import { component$, createContext, useContextProvider, useStore } from '@builder.io/qwik';

interface TodosStore {
  items: string[];
}
export const TodosContext = createContext<TodosStore>('Todos');
export default component$(() => {
  useContextProvider(
    TodosContext,
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
