import { component$, useWatch$, useStore } from '@builder.io/qwik';

interface State {
  count: number;
  debounced: number;
}

export default component$(() => {
  const store = useStore<State>({
    count: 0,
    debounced: 0,
  });

  useWatch$(({ track }) => {
    // отслеживает изменения в store.count
    track(() => store.count);
    console.log('счёт изменён');

    const timer = setTimeout(() => {
      store.debounced = store.count;
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  });

  console.log('Рендер <App>');
  return (
    <div>
      <Child state={store} />
      <button id="add" onClick$={() => store.count++}>
        +
      </button>
    </div>
  );
});

export const Child = component$((props: { state: State }) => {
  console.log('Рендер <Child>');
  return (
    <div>
      <div id="child">{props.state.count}</div>
      <GrandChild state={props.state} />
    </div>
  );
});

export const GrandChild = component$((props: { state: State }) => {
  console.log('Рендер <GrandChild>');
  return <div id="debounced">С задержкой: {props.state.debounced}</div>;
});
