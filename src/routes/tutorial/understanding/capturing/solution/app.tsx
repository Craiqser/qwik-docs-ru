/* eslint-disable no-console */
import { component$, useStore } from '@builder.io/qwik';

interface AppStore {
  counter: { count: number };
  largeData: any;
}
export default component$(() => {
  const store = useStore<AppStore>(
    {
      counter: { count: 1 },
      largeData: { data: 'ПРИТВОРЯЕТСЯ БОЛЬШИМ НАБОРОМ ДАННЫХ' },
    },
    { deep: true }
  );
  console.log('Рендер: <App/>');
  const counter = store.counter;
  return (
    <>
      <code>&lt;App&gt;</code>
      <code>largeData</code>: {JSON.stringify(store.largeData)}
      <br />
      Нажми <button onClick$={() => counter.count++}>+1</button>
      <Child counter={counter} />
    </>
  );
});

export const Child = component$((props: { counter: AppStore['counter'] }) => {
  console.log('Рендер: <Child/>');
  return (
    <>
      <code>&lt;Child&gt;</code> {props.counter.count}
    </>
  );
});
