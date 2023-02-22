import { component$, useBrowserVisibleTask$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const aHref = useSignal<Element>();
  useBrowserVisibleTask$(() => {
    const handler = (event: Event) => {
      event.preventDefault();
      window.open('http://qwik.builder.io');
    };
    aHref.value!.addEventListener('click', handler);
    return () => aHref.value!.removeEventListener('click', handler);
  });

  return (
    <a href="/" ref={aHref}>
      Нажми меня!
    </a>
  );
});
