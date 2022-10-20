import { component$, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import styles from './media.css?inline';

// A helper for defining Youtube Media Entries
export const youtube = (title: string, id: string, start_time?: number): MediaEntry => {
  const url = new URL('https://www.youtube.com/watch');
  url.searchParams.append('v', id);
  // if there's a start_time and it's not 0
  if (start_time) {
    url.searchParams.append('t', start_time.toString());
  }
  return {
    href: url.href,
    imgSrc: `http://i3.ytimg.com/vi/${id}/hqdefault.jpg`,
    title,
  };
};

export const MEDIA = mediaObj({
  videos: [
    youtube("Qwik… the world's first O(1) JavaScript framework?", 'x2eF3YLiNhY'),
    youtube('Qwik JS and the future of frameworks', 'z14c3u9q8rI'),
    youtube('Qwik: Under-The-Hood of a Resumable JavaScript Framework', 'BxGbnLb5i9Q'),
    youtube('Is Qwik + RxJS actually possible?', 'qKCX7Qz1oG8'),
    youtube('Qwik-ifying React SPA to create the fastest possible website', 'dbxP9FX5j2o'),
    youtube('Après Angular : place à Qwik!', 'Ts2IWXMYiXk'),
    youtube('🇪🇸 Qwik Framework, Un nuevo Framework Super Rápido (Lazy Loading)', 'kT-Y17mEUZs'),
    youtube('🇪🇸 Qwik - nuevo framework para Js', 'GzUMPnsDopM'),
    youtube('🇪🇸 ¿Qué onda Qwik?', 'H7TL4SqcC3E'),
    youtube('Exploring Qwik, the Resumable Framework', 'gT5NWKZZPQM'),
    youtube('Building Qwik w/ Misko Hevery', 'lY6e7Hw4uVo'),
    youtube(
      'Qwik: A no hydration instant on personalized web applications by Misko Hevery',
      'Zddw6qy5pf0'
    ),
    youtube('Why the world needs Qwik with Miško Hevery', 'IRw9efkn9UA'),
    youtube('Exploring Qwik City w/ Adam Bradley & Manu Martínez-Almeida', 'XoeJisRJjlo'),
  ],
  podcasts: [
    youtube('Build Resumable Apps with Qwik', '_PDpoJUacuc'),
    youtube('Qwik + React State (and a new mic!)', 'fa6-Mn0Eybg'),
    youtube('Introducing Qwik w/ Misko Hevery & Shai Reznik', 'iJZaT-AvJ-o'),
    youtube('Resumable Apps in Qwik', 'LbMRs7l4czI'),
    youtube('Qwik: A no-hydration instant-on personalized web applications', '0tCuUQe_ZA0'),
    youtube('QWIK - Set of great demos by Misko Hevery', '7MgNMIPISY4'),
  ],
  presentations: [
    youtube(
      'WWC22 - Qwik + Partytown: How to remove 99% of JavaScript from main thread',
      '0dC11DMR3fU',
      154
    ),
    youtube('Qwik City: Reimangined meta-framework for the edge', 'Znd11rVHQOE', 34314),
    youtube('Qwik Workshop Part 1 - Live Coding', 'GHbNaDSWUX8'),
    youtube('Qwik framework overview', 'Jf_E1_19aB4', 629),
    youtube('Qwik Core Developers Training', 'Mi7udzhcCDQ'),
    youtube('Qwik: A no hydration instant', 'Zddw6qy5pf0'),
  ],
  blogs: [
    {
      href: 'https://www.builder.io/blog/hydration-is-pure-overhead',
      title: 'Hydration is Pure Overhead',
    },
    {
      href: 'https://www.builder.io/blog/why-progressive-hydration-is-harder-than-you-think',
      title: 'Why Progressive Hydration is Harder than You Think',
    },
    {
      href: 'https://www.builder.io/blog/why-is-builderio-creating-qwik-and-partytown',
      title: 'Why is Builder.io creating Qwik and Partytown?',
    },
    {
      href: 'https://www.builder.io/blog/dont-blame-the-developer-for-what-the-frameworks-did',
      title: "Don't blame the developer for what the frameworks did!",
    },
    {
      href: 'https://www.builder.io/blog/our-current-frameworks-are-on-we-need-o1',
      title: 'Our current frameworks are O(n); we need O(1)',
    },
    {
      href: 'https://www.builder.io/blog/streaming-is-it-worth-it',
      title: 'Streaming: is it worth it?',
    },
    {
      href: 'https://dev.to/builderio/a-first-look-at-qwik-the-html-first-framework-af',
      title: 'A first look at Qwik - the HTML first framework',
    },
    {
      href: 'https://dev.to/mhevery/death-by-closure-and-how-qwik-solves-it-44jj',
      title: 'Death by Closure (and how Qwik solves it)',
    },
    {
      href: 'https://dev.to/builderio/html-first-javascript-last-the-secret-to-web-speed-4ic9',
      title: 'HTML-first, JavaScript last: the secret to web speed!',
    },
    {
      href: 'https://dev.to/mhevery/qwik-the-answer-to-optimal-fine-grained-lazy-loading-2hdp',
      title: 'Qwik: the answer to optimal fine-grained lazy loading',
    },
    {
      href: 'https://dev.to/builderio/how-to-score-100-on-google-pagespeed-insights-on-mobile-2e0i',
      title: 'How to score 100 on Google PageSpeed Insights on Mobile',
    },
    {
      href: 'https://dev.to/builderio/your-bundler-is-doing-it-wrong-ic0',
      title: 'Your bundler is doing it wrong',
    },
    {
      href: 'https://dev.to/builderio/how-we-cut-99-of-our-javascript-with-qwik-partytown-3i3k',
      title: 'How we cut 99% of our JavaScript with Qwik + Partytown',
    },
    {
      href: 'https://dev.to/builderio/introducing-qwik-starters-get-up-and-running-with-qwik-now-3ap2',
      title: 'Introducing Qwik starters - get up and running with Qwik now',
    },
  ],
  resources: [
    {
      href: 'https://docs.google.com/presentation/d/1Jj1iw0lmaecxtUpqyNdF1aBzbCVnSlbPGLbOpN2xydc/edit#slide=id.g13225ffe116_6_234',
      title: 'Qwik - Google Presentation Template',
    },
    { href: '/logos/qwik-logo.svg', title: 'Qwik SVG Logo [svg]' },
    { href: '/logos/qwik.svg', title: 'Qwik Logo and Text [svg]' },
    { href: '/logos/qwik.png', title: 'Qwik Logo and Text [png]' },
  ],
});

export interface MediaEntry {
  title: string;
  href: string;
  imgSrc?: string;
}

export const ThumbnailLink = component$((props: { entry: MediaEntry; imgLoading?: 'eager' }) => {
  return (
    <li>
      <a href={props.entry.href} target="_blank" rel="noreferrer">
        <img
          src={props.entry.imgSrc}
          loading={props.imgLoading === 'eager' ? undefined : 'lazy'}
          decoding={props.imgLoading === 'eager' ? undefined : 'async'}
          aria-hidden="true"
        />
        <p>{props.entry.title}</p>
      </a>
    </li>
  );
});

export const BulletLink = component$((props: { entry: MediaEntry }) => {
  return (
    <li>
      <a href={props.entry.href} target="_blank" rel="noreferrer">
        {props.entry.title}
      </a>
    </li>
  );
});

export const Section = component$(
  (props: {
    id: keyof typeof MEDIA;
    listStyle: 'thumbnails' | 'bullets';
    imgLoading?: 'eager';
  }) => {
    const capitalized = [props.id[0].toUpperCase(), ...props.id.slice(1)].join('');
    return (
      <section id={props.id}>
        <h2>
          <a href={`#${props.id}`}>{capitalized}</a>
        </h2>

        <ul class={props.listStyle}>
          {MEDIA[props.id].map((entry) =>
            props.listStyle === 'thumbnails' ? (
              <ThumbnailLink entry={entry} imgLoading={props.imgLoading} />
            ) : (
              <BulletLink entry={entry} />
            )
          )}
        </ul>
      </section>
    );
  }
);

export default component$(() => {
  useStyles$(styles);
  return (
    <article class="media">
      <h1>Qwik Presentations, Talks, Videos and Podcasts</h1>

      <Section id="videos" listStyle="thumbnails" imgLoading="eager" />

      <Section id="podcasts" listStyle="thumbnails" />

      <Section id="presentations" listStyle="thumbnails" />

      <Section id="blogs" listStyle="bullets" />

      <Section id="resources" listStyle="bullets" />

      <section>
        <h2>Add Media</h2>
        <p>This page missing any great resources or in need of an update?</p>
        <p>
          <a
            href="https://github.com/BuilderIO/qwik/edit/main/packages/docs/src/routes/media/index.tsx"
            target="_blank"
            class="edit-page"
          >
            Edit this page!
          </a>
        </p>
      </section>
    </article>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Presentations, Talks, Videos and Podcasts',
};

// Media Listing

// Helper function to allow autocompletions for Media Entries and Record keys
export function mediaObj<T extends string>(obj: Record<T, MediaEntry[]>) {
  return obj;
}
