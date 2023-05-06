import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({ counter: { count: 0 }, list: [0] }, { deep: false });

  return (
    <>
      <Display counter={store.counter} list={store.list} />
      <button onClick$={() => (store.counter = { count: ++store.counter.count })}>+1 к счтёчику</button>
      <button onClick$={() => (store.list = [...store.list, 0])}>+1 к списку элементов</button>
    </>
  );
});

interface DisplayProps {
  counter: { count: number };
  list: number[];
}
export const Display = component$((props: DisplayProps) => {
  return (
    <p>
      Счётчик: {props.counter.count}, Длина списка: {props.list.length}
    </p>
  );
});
