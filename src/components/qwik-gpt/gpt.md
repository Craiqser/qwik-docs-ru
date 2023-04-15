## Qwik Components

Компоненты [Qwik](https://qwik.builder.io/) очень похожи на компоненты React, они представляют собой функции, возвращающие JSX, но есть несколько важных отличий:

- API React-а недоступны, вместо этого Qwik предоставляет набор хуков и компонентов, предназначенных для работы с Qwik;
- Компоненты всегда объявляются с помощью функции `component$`;
- Компоненты могут использовать хук `useSignal` для создания реактивного состояния;
- Обработчики событий объявляются с суффиксом `$`;
- Для `<input>` событие `onChange` в Qwik называется `onInput$`;
- JSX предпочитает атрибуты HTML: `class` вместо `className`, `for` вместо `htmlFor`;
- Проекция содержимого осуществляется компонентом `<Slot/>`. Слотам можно присваивать имена, и ссылаться на них с помощью атрибута `q:slot`.

```tsx
import { component$, $, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import US_PRESIDENTS from './us-presidents.json';
import { MyOtherComponent } from './my-other-component';

// Модули CSS поддерживаются по умолчанию
import styles from './my-component.module.css';

interface MyComponentProps {
  step: number;
}

// Компоненты всегда объявляются с помощью функции `component$`.
export const MyComponent = component$((props: MyComponentProps) => {
  // Компонент использует хук `useSignal` для создания реактивного состояния.
  const seconds = useSignal(0); // { value: 0 }
  const count = useSignal(0);

  useVisibleTask$(async (taskCtx) => {
    // `useVisibleTask$` запускается только в браузере, и после того, как компонент впервые установлен в DOM.
    // Это нормально для просмотра DOM, или использования какого-либо браузерного API, инициализации библиотек, предназначенных только для браузера, запуска анимации или таймера...
    const timer = setInterval(() => {
      seconds.value = seconds.value + 1;
    }, 1000);

    taskCtx.onCleanup(() => {
      clearInterval(timer);
    });
  });

  // Обработчик события, который не является встроенным, должен быть обернут в `$`-функцию.
  const toggleDarkMode = $(() => {
    darkMode.value = !darkMode.value;
    document.body.classList.toggle('dark-mode', darkMode.value);
  });

  return (
      <header>
        <button
          class={{
            [styles.button]: true,
            [styles.darkMode]: darkMode.value, // Поддерживаются условные классы
          }}
          onClick$={toggleDarkMode}
        >
          Переключить тёмную тему
        </button>
      </header>
      <main class={styles.main}>
        <button onClick$={() => {
          // Обработчики событий имеют суффикс `$`.
          count.value = count.value + props.step;
        }}>
          Счёт: {count.value}
        </button>
        <MyOtherComponent>
          {count.value > 10 && <p>Счётчик больше 10</p>}
        </MyOtherComponent>
        <ul>
          {US_PRESIDENTS.map((president) => (
            <li key={president.id}>
              {president.name}
            </li>
          ))}
        </ul>
      </main>
      <footer>
        Секунд: {seconds.value}
      </footer>
    </>
  );
});
```

## Маршрутизация

Qwik поставляется с маршрутизатором на основе файлов, который похож на Next.js. Маршрутизатор основан на файловой системе, создание нового файла `index.tsx` в `src/routes/` создаст новый маршрут. Например, `src/routes/home/[id]/index.tsx` создаст маршрут по адресу `/home/:id/`.

Для ссылки на другие маршруты можно использовать компонент `Link`, он похож на `<a>`, но позволяет осуществлять SPA навигацию.

```tsx title="src/routes/user/[userID]/index.tsx"
import { component$ } from '@builder.io/qwik';
import { useLocation, Link } from '@builder.io/qwik-city';

export default component$(() => {
  const loc = useLocation();
  return (
    <>
      <nav>
        <Link href="/about/">SPA-навигация к /about/</Link>
        <a href="/about/">Полностраничная навигация к /about/</a>
      </nav>
      <main>
        <h1>Пользователь: {loc.params.userID}</h1>
        <div>Текущий URL-адрес: {loc.url.href}</div>
      </main>
    </>
  );
});
```
