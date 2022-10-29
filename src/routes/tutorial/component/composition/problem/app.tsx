import { component$ } from '@builder.io/qwik';

export const App = component$(() => {
  return (
    <div>
      Вставьте сюда компонент `Greeter`. Составляя компоненты вместе, можно
      писать большие приложения, не помещая весь код в один файл/компонент.
    </div>
  );
});

export const Greeter = component$(() => {
  return <div>Привет, мир!</div>;
});
