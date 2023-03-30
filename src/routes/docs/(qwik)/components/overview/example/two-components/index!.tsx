import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <div>Родительский текст</div>
      <Child />
    </>
  );
});

const Child = component$(() => {
  return <div>Дочерний текст</div>;
});
