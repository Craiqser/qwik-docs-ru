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
    { recursive: true }
  );
  console.log('Рендер: <App/>');
  const counter = store.counter;
  return (
    <>
      <tt>&lt;App&gt;</tt>
      <tt>largeData</tt>: {JSON.stringify(store.largeData)}
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
      <tt>&lt;Child&gt;</tt> {props.counter.count}
    </>
  );
});
