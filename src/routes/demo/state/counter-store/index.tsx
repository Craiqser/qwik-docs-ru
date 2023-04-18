import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const state = useStore({ count: 0 });

  return (
    <>
      <button onClick$={() => state.count++}>Прибавить</button>
      <p>Счётчик: {state.count}</p>
    </>
  );
});
