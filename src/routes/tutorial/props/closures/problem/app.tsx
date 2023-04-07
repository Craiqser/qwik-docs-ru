import { component$, $, type PropFunction } from '@builder.io/qwik';

export default component$(() => {
  const goodbye$ = $(() => alert('Пока!'));
  return (
    <main>
      <MyComponent goodbye$={goodbye$} hello$={async (name) => alert('Привет, ' + name)} />
    </main>
  );
});

interface MyComponentProps {
  goodbye$: PropFunction<() => void>;
  hello$: PropFunction<(name: string) => void>;
}
export const MyComponent = component$((props: MyComponentProps) => {
  return (
    <p>
      <button onClick$={props.goodbye$}>пока</button>
      <button onClick$={async () => await props.hello$('World')}>привет</button>
    </p>
  );
});
