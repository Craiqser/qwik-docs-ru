import { component$ } from '@builder.io/qwik';
import { QGreetings } from './react';

export default component$(() => {
  return (
    <div>
      <div>Привет от Qwik</div>
      <QGreetings />
    </div>
  );
});
