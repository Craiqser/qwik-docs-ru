import { component$, useOn, $ } from '@builder.io/qwik';

export default component$(() => {
  useOn(
    'click',
    $(() => alert('Привет, мир!'))
  );

  return <div>Компонент приложения. Кликни меня.</div>;
});
