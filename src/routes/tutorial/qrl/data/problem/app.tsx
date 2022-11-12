import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <button onClick$={async () => alert('Привет, мир!')}>нажми меня</button>
    </>
  );
});
