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

  // arrayed url
  const arrayedUrl = url.href.split('/');
  const parentRoute = arrayedUrl.slice(3)[0];

  //turn the title into array
  const arrayedTitle = pageTitle.split(' | ');

  //check if we are on home page or level 0 or 1 route
  let isBaseRoute = true;
  isBaseRoute = arrayedTitle.length > 0 ? false : true;

  // set the text for the ogimage
  const biggerTitle = isBaseRoute ? undefined : arrayedTitle[0]; //.replace('#', '');
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
      imageUrl.value = `/logos/social-card.jpg`;
    } else {
      routeLevel.value = 1;
      // check if on example a.k.a qwik-sandbox because the navigation in qwik-sandbox does not update useDocumenthead()
      if (parentRoute == 'examples') {
        imageUrl.value = `https://opengraphqwik.vercel.app/api/og/?level=${
          routeLevel.value
        }&title=${'Examples'}&subtitle=${'Qwik Sandbox'}`;
      } else {
        imageUrl.value = `https://opengraphqwik.vercel.app/api/og/?level=${routeLevel.value}&title=${ogImgTitle.value}&subtitle=${ogImgSubTitle.value}`;
      }
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
      {head.meta.map((m) => (
        <meta {...m} />
      ))}

      {head.links.map((l) => (
        <link {...l} />
      ))}

      {head.styles.map((s) => (
        <style {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}

      <ThemeScript />
    </>
  );
});
