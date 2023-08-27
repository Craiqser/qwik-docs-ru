import {
	component$,
	useId,
	useSignal,
	useVisibleTask$,
} from '@builder.io/qwik';

export default component$(() => {
  const elemIdSignal = useSignal<string | null>(null);
  const id = useId();
  const elemId = `${id}-example`;
  console.log('server-side id:', elemId);

  useVisibleTask$(() => {
    const elem = document.getElementById(elemId);
    elemIdSignal.value = elem?.getAttribute('id') || null;
    console.log('client-side id:', elemIdSignal.value);
  });

  return (
    <section>
      <div id={elemId}>
        И на стороне сервера, и на стороне клиента консоль должна соответствовать этому идентификатору:
        <br />
        <b>{elemIdSignal.value || null}</b>
      </div>
    </section>
  );
});
