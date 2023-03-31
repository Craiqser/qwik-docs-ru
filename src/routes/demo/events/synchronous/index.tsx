import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

export default component$(() => {
  const draggableRef = useSignal<HTMLElement>();
  const dragStatus = useSignal('');
  useVisibleTask$(({ cleanup }) => {
    if (draggableRef.value) {
      // Использование DOM API для добавления слушателя событий.
      const dragstart = () => (dragStatus.value = 'dragstart');
      const dragend = () => (dragStatus.value = 'dragend');

      draggableRef.value!.addEventListener('dragstart', dragstart);
      draggableRef.value!.addEventListener('dragend', dragend);
      cleanup(() => {
        draggableRef.value!.removeEventListener('dragstart', dragstart);
        draggableRef.value!.removeEventListener('dragend', dragend);
      });
    }
  });

  return (
    <div>
      <div draggable ref={draggableRef}>
        Потяни меня!
      </div>
      <div>{dragStatus.value}</div>
    </div>
  );
});
