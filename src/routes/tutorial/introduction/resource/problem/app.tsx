/* eslint-disable no-console */
import { component$, useStore, Resource, useResource$ } from '@builder.io/qwik';

export default component$(() => {
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
    <main>
      <p>
        <label>
          Имя пользователя GitHub:
          <input value={github.org} onInput$={(ev, el) => (github.org = el.value)} />
        </label>
      </p>
      <section>
        {/* Используйте <Resource> для отображения данных из функции useResource$(). */}
        {/* Чтобы помочь, вот функция обратного вызова для отображения данных при их получении. */}
        {/* (repos) => (
            <ul>
              {repos.map((repo) => (
                <li>
                  <a href={`https://github.com/${github.org}/${repo}`}>{repo}</a>
                </li>
              ))}
            </ul>
          ) */}
      </section>
    </main>
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
