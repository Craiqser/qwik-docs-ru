import { component$, useStore, useStyles$, useClientEffect$ } from '@builder.io/qwik';
import styles from './clock.css';

interface ClockStore {
  hour: number;
  minute: number;
  second: number;
}
export const Clock = component$(() => {
  useStyles$(styles);

  const store = useStore<ClockStore>({
    hour: 0,
    minute: 0,
    second: 0,
  });

  useClientEffect$(() => {
    // Поместите сюда код для периодического вызова updateClock().
  });

  return (
    <div class="clock">
      <div class="twelve"></div>
      <div class="three"></div>
      <div class="six"></div>
      <div class="nine"></div>
      <div class="hour" style={{ transform: `rotate(${store.hour}deg)` }}></div>
      <div class="minute" style={{ transform: `rotate(${store.minute}deg)` }}></div>
      <div class="second" style={{ transform: `rotate(${store.second}deg)` }}></div>
    </div>
  );
});

export function updateClock(store: ClockStore) {
  const now = new Date();
  store.second = now.getSeconds() * (360 / 60);
  store.minute = now.getMinutes() * (360 / 60);
  store.hour = now.getHours() * (360 / 12);
}

export default component$(() => {
  return (
    <div>
      <p>Это пример ленивого выполнения кода компонента, когда он становится видимым.</p>

      <p style={{ height: '800px' }}>
        ⬇️ <strong>Прокрутите вниз</strong> пока часы не окажутся в поле зрения.
      </p>

      <Clock />
    </div>
  );
});
