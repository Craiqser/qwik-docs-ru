import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const count = useSignal(0);

  return (
    <>
      <button onClick$={() => count.value++}>Прибавить</button>
      <div>Счётчик: {count.value}</div>
    </>
  );
});
