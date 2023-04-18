import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <p>Родительский текст</p>
      <Child />
    </>
  );
});

const Child = component$(() => {
  return <p>Дочерний текст</p>;
});
