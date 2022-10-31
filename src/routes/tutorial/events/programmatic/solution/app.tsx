import { component$, useOn, $ } from '@builder.io/qwik';

export const App = component$(() => {
  useOn(
    'click',
    $(() => alert('Привет, мир!'))
  );

  return <div>Компонент приложения. Кликни меня.</div>;
});
