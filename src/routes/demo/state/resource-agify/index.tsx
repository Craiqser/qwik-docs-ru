import {
  component$,
  useSignal,
  useResource$,
  Resource,
} from '@builder.io/qwik';

export default component$(() => {
  const name = useSignal<string>();

  const ageResource = useResource$<{
    name: string;
    age: number;
    count: number;
  }>(async ({ track, cleanup }) => {
    track(() => name.value);
    const abortController = new AbortController();
    cleanup(() => abortController.abort('cleanup'));
    const res = await fetch(`https://api.agify.io?name=${name.value}`, {
      signal: abortController.signal,
    });
    return res.json();
  });

  return (
    <section>
      <div>
        <label>
          Введите своё имя, и я угадаю ваш возраст!
          <input
            onInput$={(e: Event) =>
              (name.value = (e.target as HTMLInputElement).value)
            }
          />
        </label>
      </div>
      <Resource
        value={ageResource}
        onPending={() => <p>Загрузка...</p>}
        onRejected={() => <p>Не удалось получить данные</p>}
        onResolved={(ageGuess) => {
          return (
            <p>
              {name.value && (
                <>
                  {ageGuess.name} {ageGuess.age} лет
                </>
              )}
            </p>
          );
        }}
      />
    </section>
  );
});
