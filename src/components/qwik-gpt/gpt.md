## Qwik Components

Компоненты Qwik очень похожи на компоненты React, они представляют собой функции, возвращающие JSX.

Основными отличиями являются:

- Компоненты всегда объявляются с помощью функции `component$`;
- Компоненты могут использовать хук `useSignal` для создания реактивного состояния;
- Обработчики событий объявляются с суффиксом `$`;
- Для `<input>` событие `onChange` в Qwik называется `onInput$`;
- JSX предпочитает атрибуты HTML: `class` вместо `className`, `for` вместо `htmlFor`;
- Условный рендер осуществляется с помощью тернарного оператора `?` и оператора `&&`, как и в React;
- Списки отображаются с помощью функции `map`, однако каждый элемент должен иметь уникальное свойство `key`;
- Проекция содержимого осуществляется компонентом `<Slot/>`. Слотам можно присваивать имена, и ссылаться на них с помощью атрибута `q:slot`.

```tsx
import { component$, useSignal, Slot, useVisibleTask$ } from '@builder.io/qwik';
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
  const count = useSignal(0); // { value: 0 }

  useVisibleTask$(async (taskCtx) => {
    // `useVisibleTask$` запускается только в браузере, и после того, как компонент впервые установлен в DOM.
    // Это нормально для просмотра DOM, или использования какого-либо браузерного API, инициализации библиотек, предназначенных только для браузера, запуска анимации или таймера...
    const timer = setInterval(() => {
      count.value = count.value + 1;
    }, 1000);
    taskCtx.onCleanup(() => {
      clearInterval(timer);
    });
  });
  return (
    <>
      <button
        class={styles.button}
        onClick$={() => {
          // Обработчики событий имеют суффикс `$`.
          count.value = count.value + props.step;
        }}
      >
        Прибавить {props.step}
      </button>

      <main
        class={{
          conditionalClass: count.value % 2 === 0,
        }}
      >
        <h1>Счёт: {count.value}</h1>
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
    </>
  );
});
```

## Маршрутизация

Qwik поставляется с маршрутизатором на основе файлов, который похож на Next.js. Маршрутизатор основан на файловой системе, создание нового файла `index.tsx` в `src/routes/` создаст новый маршрут. Например, `src/routes/home/index.tsx` создаст маршрут по адресу `/home/`.

Вы можете создавать динамические маршруты, добавляя в путь маршрута папку вида `[param]`. Например, `src/routes/user/[id]/index.tsx` создаст маршрут по адресу `/user/:id/`. Для доступа к параметру маршрута можно использовать хук `useLocation`, экспортированный из `@builder.io/qwik-city`.

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
        {loc.isNavigating && <div>Загрузка...</div>}
        <h1>Пользователь: {loc.params.userID}</h1>
        <div>Текущий URL-адрес: {loc.url.href}</div>
      </main>
    </>
  );
});
```
