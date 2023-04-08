import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const scroll = useSignal(0);
  const mouse = useSignal({ x: 0, y: 0 });
  return (
    <div
      style={{ height: '200vh' }}
      window:onScroll$={() => (scroll.value = window.scrollY)}
      document:onMouseMove$={(e) => (mouse.value = { x: e.x, y: e.y })}
    >
      <div style={{ position: 'sticky', top: 0 }}>
        Прокрутка: {scroll.value} перемещение мыши: {mouse.value.x}, {mouse.value.y}
      </div>
    </div>
  );
});
