import { component$, useStyles$, useStore } from '@builder.io/qwik';

export const App = component$(() => {
  useStyles$(AppCSS);
  const store = useStore({ open: false, siblings: [0] }, { recursive: true });

  return (
    <div class="parent">
      <button onClick$={() => (store.open = !store.open)}>переключить</button>
      <button onClick$={() => store.siblings.push(0)}>добавить</button>
      {store.open ? <Child key="child" /> : null}
      {store.siblings.map(() => (
        <Sibling />
      ))}
    </div>
  );
});

export const Child = component$(() => {
  useStyles$(ChildCSS);
  return (
    <div class="child">
      <div>Дочерний элемент</div>
    </div>
  );
});

export const Sibling = component$(() => {
  useStyles$(SiblingCSS);

  return (
    <div class="sibling">
      <div>Соседний элемент</div>
    </div>
  );
});

//TODO: Они должны быть импортированы так: import AppCSS from './app.css'
// Однако песочница пока не поддерживает такой импорт.
export const AppCSS = `
.parent {
  border: 1px solid black;
  padding: 1em;
}
`;
export const ChildCSS = `
.child {
  margin-top: 1em;
  border: 1px solid red;
  padding: 1em;
  display: block;
}
`;
export const SiblingCSS = `.sibling {
  margin-top: 1em;
  border: 1px solid green;
  padding: 1em;
  display: block;
}
`;
