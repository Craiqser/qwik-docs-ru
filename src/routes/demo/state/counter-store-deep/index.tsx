import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({
    nested: {
      fields: { are: 'также отслеживается' },
    },
    list: ['Item 1'],
  });

  return (
    <>
      <p>{store.nested.fields.are}</p>
      <button
        onClick$={() => {
          // Несмотря на то, что мы изменяем вложенный объект, это вызовет ререндер.
          store.nested.fields.are = 'отслеживается';
        }}
      >
        Нажатие на меня работает, потому что состояние отслеживается на всю глубину вложенности
      </button>
      <br />
      <button
        onClick$={() => {
          // Поскольку состояние отслеживается на всю глубину вложенности, это вызовет ререндер.
          store.list.push(`Item ${store.list.length}`);
        }}
      >
        Добавить в список
      </button>
      <ul>
        {store.list.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    </>
  );
});
