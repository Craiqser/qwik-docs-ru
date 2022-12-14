import { component$, useStore, $ } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({ name: '' });
  return (
    <>
      Введите свое имя и нажмите клавишу ввода:{' '}
      <input
        onInput$={(event) => {
          const input = event.target as HTMLInputElement;
          store.name = input.value;
        }}
        onChange$={() => {
          if (store.name) alert(store.name);
        }}
        value={store.name}
      />
    </>
  );
});
