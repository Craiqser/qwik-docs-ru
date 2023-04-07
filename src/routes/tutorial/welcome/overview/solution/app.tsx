import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <h1>Привет, мир!</h1>
      Смотри! Я - статический компонент.
      <br />
      Qwik никогда не загрузит меня на клиента. Я рендерюсь только на сервере.
      <br />
      <button onClick$={() => alert('Привет')}>Приветствовать!</button>
      <hr />
      <Counter />
    </>
  );
});

export const Counter = component$(() => {
  const store = useStore({ count: 0 });
  return (
    <>
      Я - динамический компонент. Qwik загрузит меня только тогда, когда потребуется рендер после нажатия пользователем на кнопку<code>+1</code>.
      <br />
      Текущее значение: {store.count}
      <br />
      <button onClick$={() => store.count++}>+1</button>
    </>
  );
});
