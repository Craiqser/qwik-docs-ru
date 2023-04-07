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
      Сейчас содержимым здесь управляет <code>&lt;Panel&gt;</code>. Замените этот текст
      элементом <code>&lt;Slot&gt;</code>, чтобы увидеть содержимое элемента{' '}
      <code>&lt;App&gt;</code>.
    </div>
  );
});
