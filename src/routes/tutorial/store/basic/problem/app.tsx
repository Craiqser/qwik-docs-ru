import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const counter = { count: 0 };

  return (
    <>
      <p>Счётчик: {counter.count}</p>
      <button onClick$={() => counter.count++}>+1</button>
    </>
  );
});
