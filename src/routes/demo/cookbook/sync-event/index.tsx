import { component$, useSignal, sync$, $ } from '@builder.io/qwik';

export default component$(() => {
  const shouldPreventDefault = useSignal(true);
  return (
    <div>
      <div>Событие синхронизации:</div>
      <input
        type="checkbox"
        checked={shouldPreventDefault.value}
        onChange$={(e, target) =>
          (shouldPreventDefault.value = target.checked)
        }
      />{' '}
      Должны предотвратить по умолчанию
      <hr />
      <a
        href="https://google.com"
        target="_blank"
        data-should-prevent-default={shouldPreventDefault.value}
        onClick$={[
          sync$((e: MouseEvent, target: HTMLAnchorElement) => {
            if (target.hasAttribute('data-should-prevent-default')) {
              e.preventDefault();
            }
          }),
          $(() => {
            console.log(
              shouldPreventDefault.value ? 'Предотвращено' : 'Не предотвращено'
            );
          }),
        ]}
      >
        открыть Google
      </a>
    </div>
  );
});
