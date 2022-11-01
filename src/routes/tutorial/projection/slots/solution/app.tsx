import { component$, Slot, useStore } from '@builder.io/qwik';

export const App = component$(() => {
  console.log('Рендер: <App>');
  return (
    <Collapsable>
      <div q:slot="closed">▶ (свёрнутые сведения)</div>
      <div q:slot="open">
        ▼<div>Содержимое, которое должно отображаться при открытии компонента.</div>
      </div>
    </Collapsable>
  );
});

export const Collapsable = component$(() => {
  console.log('Рендер: <Collapsable>');
  const store = useStore({ open: true });
  return (
    <div onClick$={() => (store.open = !store.open)}>
      {store.open ? <Slot name="open" /> : <Slot name="closed" />}
    </div>
  );
});
