import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';

export default component$(() => {
  return (
    <>
      <Header />
      <main>
      </main>
      <div class="px-4">
        <Footer />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Крайне продуманный фреймворк!',
};
