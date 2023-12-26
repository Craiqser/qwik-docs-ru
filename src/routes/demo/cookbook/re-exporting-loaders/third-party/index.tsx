import { component$ } from '@builder.io/qwik';
import { ThirdPartyPaymentComponent } from './third-party-library';

// Как уже говорилось, здесь мы реэкспортируем сторонний загрузчик
export { useThirdPartyPaymentLoader } from './third-party-library';

export default component$(() => {
  return (
    <section>
      <ThirdPartyPaymentComponent />
    </section>
  );
});
