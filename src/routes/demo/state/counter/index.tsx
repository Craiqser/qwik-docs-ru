import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const count = useSignal(0);

  return (
    <>
      <p>Счёт: {count.value}</p>
      <button onClick$={() => count.value++}>Прибавить</button>
    </>
  );
});
