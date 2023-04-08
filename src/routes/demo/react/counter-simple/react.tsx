/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import { useState } from 'react';

// Создаем компонент React стандартным способом
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button className="react" onClick={() => setCount(count + 1)}>
      Счёт: {count}
    </button>
  );
}

// Преобразование компонента React в компонент Qwik
export const QCounter = qwikify$(Counter);
