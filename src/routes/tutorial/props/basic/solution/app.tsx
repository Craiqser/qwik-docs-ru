import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <main>
      <Greeter salutation="Привет" name="мир" />
    </main>
  );
});

interface GreeterProps {
  salutation: string;
  name: string;
}
export const Greeter = component$((props: GreeterProps) => {
  return (
    <p>
      {props.salutation}, {props.name}!
    </p>
  );
});
