import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { isServer } from '@builder.io/qwik/build';

export default component$(() => {
  const text = useSignal('Initial text');
  const isBold = useSignal(false);

  useTask$(({ track }) => {
    track(() => text.value);
    if (isServer) {
      return; // Защита от выполнения на сервере
    }
    isBold.value = true;
    delay(1000).then(() => (isBold.value = false));
  });

  return (
    <section>
      <label>
        Введите текст: <input bind:value={text} />
      </label>
      <p style={{ fontWeight: isBold.value ? 'bold' : 'normal' }}>
        Текст: {text}
      </p>
    </section>
  );
});

const delay = (time: number) => new Promise((res) => setTimeout(res, time));
