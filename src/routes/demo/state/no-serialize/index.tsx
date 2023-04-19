import {
  component$,
  useStore,
  useSignal,
  noSerialize,
  useVisibleTask$,
  type NoSerialize,
} from '@builder.io/qwik';
import type Monaco from './monaco';
import { monacoEditor } from './monaco';

export default component$(() => {
  const editorRef = useSignal<HTMLElement>();
  const store = useStore<{ monacoInstance: NoSerialize<Monaco> }>({
    monacoInstance: undefined,
  });

  useVisibleTask$(() => {
    const editor = monacoEditor.create(editorRef.value!, {
      value: 'Привет, мир!',
    });
    // Monaco является несериализуемым объектом, поэтому мы не можем сериализовать его во время SSR.
    // Однако мы можем инстанцировать его на клиенте после того, как компонент станет видимым.
    store.monacoInstance = noSerialize(editor);
  });
  return <div ref={editorRef}>Загрузка...</div>;
});
