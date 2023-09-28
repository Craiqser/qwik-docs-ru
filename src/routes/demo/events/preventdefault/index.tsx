import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <a
      href="/docs"
      preventdefault:click // Это предотвратит поведение по умолчанию для события клика.
      onClick$={() => {
        // event.PreventDefault() здесь не сработает, потому что обработчик управляется асинхронно.
        alert('Делаем что-нибудь для имитации навигации...');
      }}
    >
      Перейти на страницу документации
    </a>
  );
});
