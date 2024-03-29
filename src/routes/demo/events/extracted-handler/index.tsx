import { component$, useSignal, $ } from '@builder.io/qwik';

export default component$(() => {
  const count = useSignal(0);
  const increment = $(() => count.value++);
  return (
    <>
      <button onClick$={increment}>Прибавить</button>
      <p>Счёт: {count.value}</p>
    </>
  );
});
