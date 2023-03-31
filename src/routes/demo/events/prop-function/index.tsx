import { type PropFunction, component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return <CmpButton onClick$={() => alert('CLICKED!')}>Нажми меня!</CmpButton>;
});

export const CmpButton = component$<{
  // Важно сообщить TypeScript, что это async
  onClick$?: PropFunction<() => void>;
}>(({ onClick$ }) => {
  return (
    <button onClick$={onClick$}>
      <Slot />
    </button>
  );
});
