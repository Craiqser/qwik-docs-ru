import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <main>
      <p>
        <label>
          GitHub-организация:
          <input value="BuilderIO" />
        </label>
      </p>
      <section>
        <ul>
          <li>
            <a href="https://github.com/BuilderIO/qwik">Qwik</a>
          </li>
          <li>
            <a href="https://github.com/BuilderIO/partytown">Partytown</a>
          </li>
        </ul>
      </section>
    </main>
  );
});
