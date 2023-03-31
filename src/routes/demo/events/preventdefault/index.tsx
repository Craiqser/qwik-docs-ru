import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <a
      href="/about"
      preventdefault:click // Это предотвратит поведение по умолчанию для события клика.
      onClick$={() => {
        // event.PreventDefault() здесь не сработает, потому что обработчик управляется асинхронно.
        alert('Do something else to simulate navigation...');
      }}
    >
      Перейти на страницу описания
    </a>
  );
});
