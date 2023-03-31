import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const state = useStore({ count: 0 });

  return (
    <>
      <button onClick$={() => state.count++}>Прибавить</button>
      <div>Счётчик: {state.count}</div>
    </>
  );
});
