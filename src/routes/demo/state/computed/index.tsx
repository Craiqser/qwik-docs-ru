import { component$, useComputed$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const name = useSignal('Qwik');
  const capitalizedName = useComputed$(() => {
    // Имя будет автоматически пересчитываться при изменении name.value
    return name.value.toUpperCase();
  });

  return (
    <>
      <input type="text" bind:value={name} />
      <p>Имя: {name.value}</p>
      <p>Прописное имя: {capitalizedName.value}</p>
    </>
  );
});
