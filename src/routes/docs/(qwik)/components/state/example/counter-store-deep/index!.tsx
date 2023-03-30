import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore(
    {
      nested: { fields: { are: 'не отслеживается' } },
    },
    { deep: true }
  );

  return (
    <>
      <p>{store.nested.fields.are}</p>
      <button onClick$={() => (store.nested.fields.are = 'отслеживается')}>
        Нажми меня - работает, потому что состояние отслеживается на всю глубину вложенности
      </button>
      <br />
      <button onClick$={() => (store.nested = { fields: { are: 'отслеживается' } })}>
        Нажми меня - всё ещё работает
      </button>
    </>
  );
});
