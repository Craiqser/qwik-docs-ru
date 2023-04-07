import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <main>
      <Greeter />
    </main>
  );
});

export const Greeter = () => {
  return <p>Привет, мир!</p>;
};
