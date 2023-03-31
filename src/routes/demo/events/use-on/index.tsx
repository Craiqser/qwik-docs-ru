import { $, component$, useOnDocument, useStore } from '@builder.io/qwik';

// Предполагаем многоразовое использование, не имеющее доступа к JSX,
// но нам нужно зарегистрировать обработчики событий.
function useMousePosition() {
  const position = useStore({ x: 0, y: 0 });
  useOnDocument(
    'mousemove',
    $((event) => {
      const { x, y } = event as MouseEvent;
      position.x = x;
      position.y = y;
    })
  );
  return position;
}

export default component$(() => {
  const pos = useMousePosition();
  return (
    <div>
      Позиция мыши: ({pos.x}, {pos.y})
    </div>
  );
});
