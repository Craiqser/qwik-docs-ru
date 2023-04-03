import { component$ } from '@builder.io/qwik';

interface ItemProps {
  name?: string;
  quantity?: number;
  description?: string;
  price?: number;
}

export const Item = component$<ItemProps>((props) => {
  return (
    <ul>
      <li>название: {props.name}</li>
      <li>количество: {props.quantity}</li>
      <li>описание: {props.description}</li>
      <li>цена: {props.price}</li>
    </ul>
  );
});

export default component$(() => {
  return (
    <>
      <h1>Параметры</h1>
      <Item name="hammer" price={9.99} />
    </>
  );
});
