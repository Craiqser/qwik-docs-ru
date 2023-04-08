/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';

// Создаем компонент React стандартным способом
function Greetings() {
  return <div>Привет от React</div>;
}

// Преобразование компонента React в компонент Qwik
export const QGreetings = qwikify$(Greetings);
