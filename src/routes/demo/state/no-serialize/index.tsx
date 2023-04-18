import {
  component$,
  useStore,
  useSignal,
  noSerialize,
  useVisibleTask$,
  type NoSerialize,
} from '@builder.io/qwik';
import * as monaco from './monaco';

export default component$(() => {
  const editorRef = useSignal<HTMLElement>();
  const store = useStore<{ monacoInstance: NoSerialize<any> }>({
    monacoInstance: undefined,
  });

  useVisibleTask$(() => {
    const editor = monaco.editor.create(editorRef.value!, {
      value: 'Hello, world!',
    });
    // Monaco является несериализуемым объектом, поэтому мы не можем сериализовать его во время SSR.
    // Однако мы можем инстанцировать его на клиенте после того, как компонент станет видимым.
    store.monacoInstance = noSerialize(editor);
  });
  return <div ref={editorRef} />;
});
