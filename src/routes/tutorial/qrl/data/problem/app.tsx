import { component$ } from '@builder.io/qwik';

export const App = component$(() => {
  return (
    <>
      <button onClick$={async () => alert('Привет, мир!')}>нажми меня</button>
    </>
  );
});
