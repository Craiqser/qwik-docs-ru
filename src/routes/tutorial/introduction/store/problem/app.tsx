import { component$ } from '@builder.io/qwik';

export default component$(() => {
  // `github` is just a constant object.
  // Convert it to a Store that can be serialized to JSON on application pause.
  const github = {
    org: 'BuilderIO',
    repos: ['qwik', 'partytown'] as string[] | null,
  };

  return (
    <main>
      <p>
        Имя пользователя GitHub:
        <input value={github.org} />
      </p>
      <section>
        {github.repos ? (
          <ul>
            {github.repos.map((repo) => (
              <li>
                <a href={`https://github.com/${github.org}/${repo}`}>
                  {github.org}/{repo}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          'загрузка...'
        )}
      </section>
    </main>
  );
});
