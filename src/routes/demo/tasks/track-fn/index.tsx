import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { isServer } from '@builder.io/qwik/build';

export default component$(() => {
  const isUppercase = useSignal(false);
  const text = useSignal('');
  const delayText = useSignal('');

  useTask$(({ track }) => {
    const value = track(() =>
      isUppercase.value ? text.value.toUpperCase() : text.value.toLowerCase()
    );
    const update = () => (delayText.value = value);
    isServer
      ? update() // Во время рендера на сервере задержку не делаем.
      : delay(500).then(update); // Задержка в браузере.
  });

  return (
    <section>
      <label>
        Введите текст: <input bind:value={text} />
      </label>
      <label>
        Прописной <input type="checkbox" bind:checked={isUppercase} />
      </label>
      <p>Текст с задержкой: {delayText}</p>
    </section>
  );
});

function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
