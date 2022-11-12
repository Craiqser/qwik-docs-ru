import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div>
      <Greeter salutation="Привет" name="мир" />
    </div>
  );
});

interface GreeterProps {
  salutation: string;
  name: string;
}
export const Greeter = component$((props: GreeterProps) => {
  return (
    <div>
      {props.salutation}, {props.name}!
    </div>
  );
});
