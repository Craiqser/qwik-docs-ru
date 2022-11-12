import { component$ } from '@builder.io/qwik';

export default component$(() => {
  // @ts-ignore
  const data = {
    name: 'Qwik',
    description: DESCRIPTION,
  };

  return (
    <>
      <input value="data.name должен быть здесь" />
      <br />
      <textarea rows={10} cols={60}>
        data.description должен быть здесь
      </textarea>
    </>
  );
});

export const DESCRIPTION = `
Qwik разработан для максимально быстрой загрузки страниц,
предоставляя чистый HTML с практически нулевым объёмом JavaScript,
чтобы ваши страницы стали интерактивными, независимо от того,
насколько сложны ваш сайт или приложение. Это достигается
за счет возобновляемости.`;
