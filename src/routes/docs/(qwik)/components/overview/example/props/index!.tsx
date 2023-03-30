import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <h1>Параметры</h1>
      <Item name="hammer" price={9.99} />
    </>
  );
});

interface ItemProps {
  name?: string;
  quantity?: number;
  description?: string;
  price?: number;
}

export const Item = component$<ItemProps>(({ name, quantity, description, price }) => {
  return (
    <ul>
      <li>название: {name}</li>
      <li>количество: {quantity}</li>
      <li>описание: {description}</li>
      <li>цена: {price}</li>
    </ul>
  );
});
