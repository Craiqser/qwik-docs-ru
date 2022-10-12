/* eslint-disable no-console */
import { component$, useStore, useWatch$ } from '@builder.io/qwik';

interface AppStore {
  count: number;
  delayCount: number;
}
export const App = component$(() => {
  const store = useStore<AppStore>({
    count: 0,
    delayCount: 0,
  });
  console.log('Render: <App>');
  useWatch$(({ track }) => {
    // tracking `store.count`
    // setup a timer to copy `count => delayCount` after 2 seconds.
    return () => {
      // cleanup code
    };
  });
  return (
    <>
      <DisplayCount store={store} />
      <DisplayDelayCount store={store} />
      <button onClick$={() => store.count++}>+1</button>
    </>
  );
});

export const DisplayCount = component$((props: { store: AppStore }) => {
  console.log('Render: <DisplayA>');
  return <>{props.store.count}</>;
});

export const DisplayDelayCount = component$((props: { store: AppStore }) => {
  console.log('Render: <DisplayB>');
  return <>{props.store.delayCount}</>;
});
