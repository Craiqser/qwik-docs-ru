import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const counter = useStore({ count: 0 });

  return (
    <>
      <p>Счётчик: {counter.count}</p>
      <button onClick$={() => counter.count++}>+1</button>
    </>
  );
});
