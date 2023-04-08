/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import { useState } from 'react';

// Создаем компонент React стандартным способом
function Counter() {
  // Печать в консоль при рендере компонента.
  console.log('React <Counter/> Render');
  const [count, setCount] = useState(0);
  return (
    <button className="react" onClick={() => setCount(count + 1)}>
      Счёт: {count}
    </button>
  );
}

// Укажите готовность к гидратации компонента при событии hover.
export const QCounter = qwikify$(Counter, { eagerness: 'hover' });
