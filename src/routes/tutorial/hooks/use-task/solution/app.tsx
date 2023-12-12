import { component$, useTask$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({
    value: '',
    debouncedValue: '',
  });
  useTask$(({ track, cleanup }) => {
    // Повторный запуск этой функции при изменении свойства `value`.
    track(() => store.value);
    // Установка тайм-аута для дебаунса.
    const id = setTimeout(() => (store.debouncedValue = store.value), 500);
    // Возвращает функцию очистки для случая, если свойство `value` изменится до истечения времени.
    cleanup(() => clearTimeout(id));
  });
  return (
    <>
      <input value={store.value} onInput$={(ev, el) => (store.value = el.value)} />
      <br />
      Текущее значение: {store.value}
      <br />
      Дебаунс-значение: {store.debouncedValue}
    </>
  );
});
