import { component$, $ } from '@builder.io/qwik';

export const App = component$(() => {
  return (
    <>
      <button onClick$={async () => alert(await $('Привет, мир!').resolve())}>нажми меня</button>
    </>
  );
});
