import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { isServer } from '@builder.io/qwik/build';

export default component$(() => {
  const text = useSignal('Initial text');
  const delayText = useSignal('');

  useTask$(({ track }) => {
    track(() => text.value);
    const value = text.value;
    const update = () => (delayText.value = value);
    isServer
      ? update() // Во время рендера на сервере задержку не делаем.
      : delay(500).then(update); // Задержка в браузере.
  });

  return (
    <div>
      Введите текст: <input bind:value={text} />
      <div>Текст с задержкой: {delayText}</div>
    </div>
  );
});

const delay = (time: number) => new Promise((res) => setTimeout(res, time));
