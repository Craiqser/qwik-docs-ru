import { component$ } from '@builder.io/qwik';

export const App = component$(() => {
  return (
    <a href="/" preventdefault:click onClick$={() => alert('Делаем что-то ещё.')}>
      Нажми меня!
    </a>
  );
});
