/* eslint-disable no-console */
import { component$, useStore } from '@builder.io/qwik';

interface AppStore {
  countA: number;
  countB: number;
}

export default component$(() => {
  const store = useStore({
    countA: 0,
    countB: 0,
  });
  console.log('Рендер: <App>');
  return (
    <>
      <button onClick$={() => store.countA++}>a++</button>
      <DisplayA store={store} />
      <hr />
      <button onClick$={() => store.countB++}>b++</button>
      <DisplayB store={store} />
    </>
  );
});

export const DisplayA = component$<{ store: AppStore }>((props) => {
  console.log('Рендер: <DisplayA>');
  return <>{props.store.countA}</>;
});

export const DisplayB = component$<{ store: AppStore }>((props) => {
  console.log('Рендер: <DisplayB>');
  return <>{props.store.countB}</>;
});
