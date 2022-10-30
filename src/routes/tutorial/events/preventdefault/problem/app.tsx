import { component$ } from '@builder.io/qwik';

export const App = component$(() => {
  return (
    <a href="/" onClick$={() => alert('Делаем что-то ещё.')}>
      Нажми меня!
    </a>
  );
});
