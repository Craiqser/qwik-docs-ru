import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';
import { Social } from './social';
import { Vendor } from './vendor';
import { ThemeScript } from './theme-script';

export const RouterHead = component$(() => {
  const { url } = useLocation();
  const head = useDocumentHead();
  const title = head.title
    ? `${head.title} 📚 Документация Qwik`
    : `Qwik - Крайне продуманный фреймворк`;
  const description =
    head.meta.find((m) => m.name === 'description')?.content ||
    `Без гидратации, с автоматической ленивой загрузкой, крайне оптимизирован, прекрасен 🎉!`;

  const pageTitle = head.title;

  const ogImageUrl = new URL('https://opengraphqwik.vercel.app/api/og');

  //turn the title into array
  const arrayedTitle = pageTitle.split(' | ');

  //check if we are on home page or level 0 or 1 route
  let isBaseRoute = true;
  isBaseRoute = arrayedTitle.length > 0 ? false : true;

  // set the text for the ogimage
  const biggerTitle = isBaseRoute ? undefined : arrayedTitle[0];
  const smallerTitle = isBaseRoute ? undefined : arrayedTitle[1];

  const routeLevel = useSignal(0);

  const imageUrl = useSignal('');
  const ogImgTitle = useSignal('');
  const ogImgSubTitle = useSignal('');

  useTask$(() => {
    //change the value of the title and subtitle
    ogImgTitle.value = biggerTitle!;
    ogImgSubTitle.value = smallerTitle!;

    //decide whether or not to show subtitle
    if (ogImgSubTitle.value == undefined || ogImgTitle == undefined) {
      ogImgTitle.value = biggerTitle!;

      routeLevel.value = 0;
      imageUrl.value = new URL(`/logos/social-card.jpg`, url).href;
    } else {
      routeLevel.value = 1;
      ogImageUrl.searchParams.set('title', ogImgTitle.value);
      ogImageUrl.searchParams.set('subtitle', ogImgSubTitle.value);
      ogImageUrl.searchParams.set('level', routeLevel.value.toString());

      imageUrl.value = ogImageUrl.toString();
    }
  });
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="apple-mobile-web-app-title" content="Qwik" />
      <meta name="application-name" content="Qwik" />
      <meta name="apple-mobile-web-app-title" content="Qwik" />
      <meta name="theme-color" content="#006ce9" />
      <meta name="color-scheme" content="dark light" />

      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" href="/favicons/favicon.svg" type="image/svg+xml" />

      {import.meta.env.PROD && (
        <>
          <Social
            title={title}
            description={description}
            href={url.href}
            ogImage={imageUrl.value}
          />
          <Vendor />
        </>
      )}

      {head.meta
        // Пропустить описание, так как оно уже было добавлено выше
        .filter((s) => s.name !== 'description')
        .map((m, key) => (
          <meta key={key} {...m} />
      ))}

      {head.links.map((l, key) => (
        <link key={key} {...l} />
      ))}

      {head.styles.map((s, key) => (
        <style key={key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}

      <ThemeScript />
    </>
  );
});
