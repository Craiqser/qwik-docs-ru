import {
  component$,
  useStore,
  noSerialize,
  useVisibleTask$,
} from '@builder.io/qwik';
import Monaco from './monaco';

export default component$(() => {
  const state = useStore<{ monacoInstance: Monaco | undefined }>({
    // Не инициализировать на сервере
    monacoInstance: undefined,
  });

  useVisibleTask$(() => {
    // Monaco является несериализуемым объектом, поэтому мы не можем сериализовать его во время SSR.
    // Однако мы можем инстанцировать его на клиенте после того, как компонент станет видимым.
    setTimeout(() => (state.monacoInstance = noSerialize(new Monaco())), 1000);
  });
  return <div>{state.monacoInstance ? 'Monaco загружен' : 'загрузка...'}</div>;
});
