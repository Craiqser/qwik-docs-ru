import { component$, useWatch$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({
    value: '',
    debouncedValue: '',
  });
  useWatch$(({ track }) => {
    // Повторный запуск этой функции при изменении свойства `value`.
    track(() => store.value);
    // Установка тайм-аута для дебаунса.
    const id = setTimeout(() => (store.debouncedValue = store.value), 500);
    // Возвращает функцию очистки для случая, если свойство `value` изменится до истечения времени.
    return () => clearTimeout(id);
  });
  return (
    <>
      <input
        value={store.value}
        onInput$={(event) => (store.value = (event.target as HTMLInputElement).value)}
      />
      <br />
      Текущее значение: {store.value}
      <br />
      Дебаунс-значение: {store.debouncedValue}
    </>
  );
});
