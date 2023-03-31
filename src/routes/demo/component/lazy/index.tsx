import { component$ } from '@builder.io/qwik';

export const Child = component$(() => {
  return <span>дочерний</span>;
});

export const Parent = component$(() => {
  return (
    <section>
      <Child />
    </section>
  );
});
