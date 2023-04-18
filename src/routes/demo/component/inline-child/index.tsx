import { component$ } from '@builder.io/qwik';

// Встроенный компонент: объявляется с помощью стандартной функции.
export const MyButton = (props: { text: string }) => {
  return <button>{props.text}</button>;
};

// Компонент: объявляется с помощью `component$()`.
export default component$(() => {
  return (
    <p>
      Какой-то текст:
      <MyButton text="Нажми меня" />
    </p>
  );
});
