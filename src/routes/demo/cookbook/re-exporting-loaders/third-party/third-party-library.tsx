import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

export const useThirdPartyPaymentLoader = routeLoader$(() => {
  return { name: 'John Doe' };
});

export const ThirdPartyPaymentComponent = component$(() => {
  const thirdPartyPaymentLoader = useThirdPartyPaymentLoader();
  return (
    <div
      class={[
        'w-96 h-56 m-auto rounded-xl relative text-white font-bold shadow-2xl',
        'transition-transform transform hover:scale-110 bg-gray-600',
      ]}
    >
      <div class="w-full px-8 absolute top-8">
        <div class="flex justify-between">
          <div class="">
            <p>Имя</p>
            <p class="tracking-widest">{thirdPartyPaymentLoader.value.name}</p>
          </div>
          <img class="w-12 h-12" src="/logos/qwik-logo.svg" />
        </div>
        <div class="pt-1">
          <p class="font-medium">Номер карты</p>
          <p class="tracking-wider">4642 3489 9867 7632</p>
        </div>
        <div class="pt-6 pr-6">
          <div class="flex justify-between text-xs">
            <div>
              <p class="font-medium">Действует с</p>
              <p class="tracking-wider">11/15</p>
            </div>
            <div>
              <p class="font-medium">Срок действия</p>
              <p class="tracking-wider">03/25</p>
            </div>
            <div>
              <p class="font-medium">CVV</p>
              <p class="tracking-wider">···</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
