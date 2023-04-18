/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';

// Создаем компонент React стандартным способом
function Greetings() {
  return <p>Привет от React</p>;
}

// Преобразование компонента React в компонент Qwik
export const QGreetings = qwikify$(Greetings);
