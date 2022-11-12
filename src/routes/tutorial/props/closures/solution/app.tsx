import { component$, $, PropFunction } from '@builder.io/qwik';

export default component$(() => {
  const goodbye$ = $(() => alert('Пока!'));
  return (
    <div>
      <MyComponent goodbye$={goodbye$} hello$={async (name) => alert('Привет, ' + name)} />
    </div>
  );
});

interface MyComponentProps {
  goodbye$: PropFunction<() => void>;
  hello$: PropFunction<(name: string) => void>;
}
export const MyComponent = component$((props: MyComponentProps) => {
  return (
    <div>
      <button onClick$={props.goodbye$}>пока</button>
      <button onClick$={async () => await props.hello$('World')}>привет</button>
    </div>
  );
});
