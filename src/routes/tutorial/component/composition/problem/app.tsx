import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <main>
      Вставьте сюда компонент `Greeter`. Составляя компоненты вместе, можно
      писать большие приложения, не помещая весь код в один файл/компонент.
    </main>
  );
});

export const Greeter = component$(() => {
  return <div>Привет, мир!</div>;
});
