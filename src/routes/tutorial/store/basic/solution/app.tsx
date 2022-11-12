import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const counter = useStore({ count: 0 });

  return (
    <>
      <div>Счётчик: {counter.count}</div>
      <button onClick$={() => counter.count++}>+1</button>
    </>
  );
});
