import { component$, Slot, useStyles$ } from '@builder.io/qwik';

export const Card = component$(() => {
  useStyles$(CSS);
  return (
    <div class="card">
      <div class="title">
        <Slot name="title"></Slot>
      </div>
      <div class="body">
        <Slot name="body"></Slot>
      </div>
    </div>
  );
});

export default component$(() => {
  return (
    <>
      <Card>
        <span q:slot="title">Qwik</span>
        <span q:slot="body">Qwik - это возобновляемый фреймворк для создания мгновенных веб-приложений.</span>
      </Card>
      <Card>
        <span q:slot="title">Partytown</span>
      </Card>
      <Card>
        <span q:slot="body">
          Builder.io позволяет вам визуально наращивать свой технический стек, предоставляя всей вашей команде возможность
          изуально создавать и оптимизировать высокоскоростные возможности ваших сайтов и приложений. Обеспечьте
          автономию всей команды с помощью платформы, одобренной разработчиками.
        </span>
      </Card>
    </>
  );
});

export const CSS = `
.card {
  border-radius: 5px;
  vertical-align: top;
  display: inline-block;
  border: 1px solid grey;
  width: 200px;
  margin: .5em;
}

.title {
  background-color: lightgray;
  padding: 0.5em;
  border-bottom: 1px solid black;
}

/* Добавьте сюда правильный CSS-селектор, чтобы создать вариант для слота с именем "title". */
q\\:title {
  content: 'Резервное название';
  color: red;
}

.body {
  padding: 0.5em;
}

/* Добавьте сюда правильный CSS-селектор, чтобы создать вариант для слота с именем "body". */
q\\:body {
  content: 'Резервное содержимое';
  color: orange;
}
`;
