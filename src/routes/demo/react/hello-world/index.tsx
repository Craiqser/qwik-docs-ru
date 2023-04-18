import { component$ } from '@builder.io/qwik';
import { QGreetings } from './react';

export default component$(() => {
  return (
    <main>
      <p>Привет от Qwik</p>
      <QGreetings />
    </main>
  );
});
