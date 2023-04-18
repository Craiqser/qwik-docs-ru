import { component$ } from '@builder.io/qwik';

export const Child = component$(() => {
  return <p>дочерний</p>;
});

export const Parent = component$(() => {
  return (
    <section>
      <Child />
    </section>
  );
});
