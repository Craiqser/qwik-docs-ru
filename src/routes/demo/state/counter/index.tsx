import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const count = useSignal(0);

  return (
    <>
      <div>Счёт: {count.value}</div>
      <button onClick$={() => count.value++}>Прибавить</button>
    </>
  );
});
