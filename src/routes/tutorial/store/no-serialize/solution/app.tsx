import { component$, noSerialize, type NoSerialize, useStore } from '@builder.io/qwik';

interface AppStore {
  time: null | string;
  cleanup: NoSerialize<() => void>;
}

export default component$(() => {
  const store = useStore<AppStore>({
    time: null,
    cleanup: undefined,
  });
  return (
    <>
      <p>Текущее время: {store.time}</p>
      <button
        onClick$={() => {
          const id = setInterval(() => (store.time = new Date().toString()), 1000);
          store.cleanup = noSerialize(() => clearInterval(id));
        }}
      >
        старт
      </button>
      <button
        onClick$={() => {
          store.cleanup && store.cleanup();
          store.cleanup = undefined;
        }}
      >
        стоп
      </button>
    </>
  );
});
