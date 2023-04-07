import { component$, useOn, $ } from '@builder.io/qwik';

export default component$(() => {
  useOn(
    'click',
    $(() => alert('Привет, мир!'))
  );

  return <p>Компонент приложения. Кликни меня.</p>;
});
