import {
  component$,
  createContextId,
  useContext,
  useContextProvider,
  useStore,
} from '@builder.io/qwik';

// Объявление идентификатора контекста
export const CTX = createContextId<{ count: number }>('stuff');

export default component$(() => {
  const userData = useStore({ count: 0 });

  // Предоставляем состояние контексту по идентификатору контекста
  useContextProvider(CTX, userData);

  return <Child />;
});

export const Child = component$(() => {
  const userData = useContext(CTX);
  return (
    <>
      <button onClick$={() => userData.count++}>Прибавить</button>
      <p>Счётчик: {userData.count}</p>
    </>
  );
});
