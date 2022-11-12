import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return <button onClick$={() => alert('Привет, мир!')}>Нажми меня</button>;
});
