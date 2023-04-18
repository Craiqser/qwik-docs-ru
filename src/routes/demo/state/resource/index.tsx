import {
  component$,
  Resource,
  useResource$,
  useSignal,
} from '@builder.io/qwik';

export default component$(() => {
  const prNumber = useSignal('3576');

  const prTitle = useResource$<string>(async ({ track }) => {
    // Будет запускаться сначала при монтировании (на сервере), а затем каждый раз при изменении prNumber (на клиенте).
    // Это означает, что данный код будет выполняться и на сервере, и в браузере
    track(() => prNumber.value);
    const response = await fetch(
      `https://api.github.com/repos/BuilderIO/qwik/pulls/${prNumber.value}`
    );
    const data = await response.json();
    return data.title as string;
  });

  return (
    <>
      <input type="number" bind:value={prNumber} />
      <h1>PR#{prNumber}:</h1>
      <Resource
        value={prTitle}
        onPending={() => <p>Загрузка...</p>}
        onResolved={(title) => <h2>{title}</h2>}
      />
    </>
  );
});
