import { component$, useSignal, useVisibleTask$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({
    width: 0,
    height: 0,
  });
  const outputRef = useSignal<Element>();
  useVisibleTask$(() => {
    if (outputRef.value) {
      const rect = outputRef.value.getBoundingClientRect();
      store.width = Math.round(rect.width);
      store.height = Math.round(rect.height);
    }
  });

  return (
    <main>
      <aside style={{ border: '1px solid red', width: '100px' }}>
        Измените здесь текст, чтобы растянуть поле.
      </aside>
      <p>
        Приведенное выше красное поле имеет высоту {store.height} пикселей и ширину {store.width} пикселей.
      </p>
    </main>
  );
});
