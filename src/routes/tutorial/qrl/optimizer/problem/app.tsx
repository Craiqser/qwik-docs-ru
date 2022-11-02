/* eslint-disable no-console */
import { component$, useStore } from '@builder.io/qwik';

export const App = component$(() => {
  const store = useStore({ count: 0 });
  return (
    <>
      Счётчик: {store.count} <button onClick$={() => console.log('+1')}>+1</button>
    </>
  );
});
