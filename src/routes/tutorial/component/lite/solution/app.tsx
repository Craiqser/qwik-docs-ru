import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div>
      <Greeter />
    </div>
  );
});

export const Greeter = () => {
  return <div>Привет, мир!</div>;
};
