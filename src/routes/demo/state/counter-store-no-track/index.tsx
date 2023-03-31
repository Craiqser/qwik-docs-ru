import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({
    nested: { fields: { are: 'не отслеживается' } },
  });

  return (
    <>
      <p>{store.nested.fields.are}</p>
      <button onClick$={() => (store.nested.fields.are = 'отслеживается')}>
        Нажми меня - не работает
      </button>
      <br />
      <button onClick$={() => (store.nested = { fields: { are: 'отслеживается' } })}>
        Нажми меня - работает
      </button>
    </>
  );
});
