/* eslint-disable no-console */
import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({ count: 0 });
  console.log('Рендер: <App>');
  return (
    <Panel>
      Счётчик: {store.count}. <button onClick$={() => store.count++}>+1</button>
    </Panel>
  );
});

export const Panel = component$(() => {
  console.log('Рендер: <Panel>');
  return (
    <div style={{ border: '2px solid red;', padding: '1em' }}>
      Сейчас содержимым здесь управляет <tt>&lt;Panel&gt;</tt>. Замените этот текст
      элементом <tt>&lt;Slot&gt;</tt>, чтобы увидеть содержимое элемента <tt>&lt;App&gt;</tt>.
    </div>
  );
});
