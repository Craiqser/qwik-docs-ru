/* eslint-disable no-console */
import { component$, useStore } from '@builder.io/qwik';

interface CountStore {
  count: number;
}
export default component$(() => {
  const store = useStore<CountStore>({ count: 0 });
  console.log('Render: <App/>');
  return (
    <>
      <tt>&lt;App&gt;</tt>
      Этот компонент является статическим! После первоначального рендера в рамках SSR, он никогда не будет повторно рендериться на клиенте. Это означает, что он также никогда не будет загружаться на клиента. Компонент тришейкается на клиенте.
      <br />
      Нажми <button onClick$={() => store.count++}>+1</button> чтобы наблюдать, какой код
      Qwik загружает в качестве результата изменения состояния приложения.
      <Child store={store} />
    </>
  );
});

export const Child = component$((props: { store: CountStore }) => {
  console.log('Render: <Child/>');
  return (
    <>
      <tt>&lt;Child&gt;</tt>
      Этот компонент является динамическим, поскольку он привязан к <tt>props.store.count</tt>.
      {props.store.count}
      <GrandChild store={props.store} />
    </>
  );
});

export const GrandChild = component$((props: { store: CountStore }) => {
  console.log('Render: <GroundChild/>');
  return (
    <>
      <tt>&lt;GrandChild&lt;</tt>
      Этот компонент также является динамическим, поскольку он привязан к <tt>props.store.count</tt>.
      {props.store.count}
    </>
  );
});
