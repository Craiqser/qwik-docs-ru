import { component$, $ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <button onClick$={async () => alert(await $('Привет, мир!').resolve())}>нажми меня</button>
    </>
  );
});
