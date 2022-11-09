import { component$, useStore } from '@builder.io/qwik';

export const App = component$(() => {
  const store = useStore({ count: 0 });

  return (
    <div>
      <p>Счёт: {store.count}</p>
      <p>
        <button onClick$={() => store.count++}>Нажми</button>
      </p>
    </div>
  );
});
