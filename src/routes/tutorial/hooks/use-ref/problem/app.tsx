import { component$, useRef, useClientEffect$, useStore } from '@builder.io/qwik';

export const App = component$(() => {
  const store = useStore({
    width: 0,
    height: 0,
  });
  const outputRef = useRef();
  useClientEffect$(() => {
    if (outputRef.current) {
      const rect = outputRef.current.getBoundingClientRect();
      store.width = Math.round(rect.width);
      store.height = Math.round(rect.height);
    }
  });

  return (
    <div>
      <div style={{ border: '1px solid red', width: '100px' }}>
        Измените здесь текст, чтобы растянуть поле.
      </div>
      <div>
        Приведенное выше красное поле имеет высоту {store.height} пикселей и ширину {store.width} пикселей.
      </div>
    </div>
  );
});
