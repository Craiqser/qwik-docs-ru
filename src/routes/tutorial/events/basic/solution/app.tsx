import { component$ } from '@builder.io/qwik';

export const App = component$(() => {
  return <button onClick$={() => alert('Привет, мир!')}>Нажми меня</button>;
});
