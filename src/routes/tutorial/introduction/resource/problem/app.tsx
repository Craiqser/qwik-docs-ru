/* eslint-disable no-console */
import { component$, useStore, Resource, useResource$ } from '@builder.io/qwik';

export const App = component$(() => {
  const github = useStore({
    org: 'BuilderIO',
  });

  const reposResource = useResource$<string[]>(({ track, cleanup }) => {
    // Нам нужен способ повторного получения данных при каждом изменении `github.org`.
    // Используйте `track` для запуска повторного запуска функции получения данных.
    track(() => github.org);

    // Хорошей практикой является использование `AbortController` для прерывания
    // получения данных, если поступает новый запрос. Мы создаем новый `AbortController`
    // и регистрируем функцию `cleanup`, которая вызывается при повторном запросе.
    const controller = new AbortController();
    cleanup(() => controller.abort());

    // Получение данных и возврат промиса.
    return getRepositories(github.org, controller);
  });

  console.log('Рендер');
  return (
    <div>
      <span>
        Имя пользователя GitHub:
        <input
          value={github.org}
          onInput$={(ev) => (github.org = (ev.target as HTMLInputElement).value)}
        />
      </span>
      <div>
        <Resource
          value={reposResource}
          onPending={() => <>Загрузка...</>}
          onRejected={(error) => <>Ошибка: {error.message}</>}
          onResolved={(repos) => (
            <ul>
              {repos.map((repo) => (
                <li>
                  <a href={`https://github.com/${github.org}/${repo}`}>{repo}</a>
                </li>
              ))}
            </ul>
          )}
        />
      </div>
    </div>
  );
});

export async function getRepositories(
  username: string,
  controller?: AbortController
): Promise<string[]> {
  console.log('FETCH', `https://api.github.com/users/${username}/repos`);
  const resp = await fetch(`https://api.github.com/users/${username}/repos`, {
    signal: controller?.signal,
  });
  console.log('FETCH resolved');
  const json = await resp.json();
  return Array.isArray(json)
    ? json.map((repo: { name: string }) => repo.name)
    : Promise.reject(json);
}
