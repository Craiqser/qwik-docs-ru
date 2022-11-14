import { component$, useStore, useStyles$, useClientEffect$ } from '@builder.io/qwik';
import styles from './clock.css?inline';

export default component$(() => {
  const items = new Array(60).fill(null).map((_, index) => 'item ' + index);

  console.log('РОДИТЕЛЬ');
  return (
    <div>
      <p onClick$={() => console.log('тест')}>
        Это пример ленивого выполнения кода компонента, когда он становится видимым.
      </p>

      <p>
        ⬇️ <strong>Прокрутите вниз</strong> пока часы не окажутся в поле зрения.
      </p>

      <ul>
        {items.map((i) => (
          <li>{i}</li>
        ))}
      </ul>

      <Clock />
    </div>
  );
});

export const Clock = component$(() => {
  useStyles$(styles);

  const store = useStore({
    hour: {},
    minute: {},
    second: {},
  });

  useClientEffect$(() => {
    const getStyle = (deg: number) => ({ transform: `rotate(${deg}deg)` });
    const update = () => {
      const now = new Date();
      store.second = getStyle(now.getSeconds() * (360 / 60));
      store.minute = getStyle(now.getMinutes() * (360 / 60));
      store.hour = getStyle(now.getHours() * (360 / 12));
    };
    update();
    const tmrId = setInterval(update, 1000);
    return () => clearInterval(tmrId);
  });

  console.log('Рендер часов');
  return (
    <div class="clock">
      <div class="twelve"></div>
      <div class="three"></div>
      <div class="six"></div>
      <div class="nine"></div>
      <div class="hour" style={store.hour}></div>
      <div class="minute" style={store.minute}></div>
      <div class="second" style={store.second}></div>
    </div>
  );
});
