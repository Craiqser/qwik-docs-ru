import { partytownVite } from '@builder.io/partytown/utils';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { qwikReact } from '@builder.io/qwik-react/vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import path, { resolve } from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import { examplesData, playgroundData, tutorialData } from './vite.repl-apps';
import { sourceResolver } from './vite.source-resolver';

export default defineConfig(async () => {
  const { default: rehypePrettyCode } = await import('rehype-pretty-code');

  const routesDir = resolve('src', 'routes');
  return {
    dev: {
      headers: {
        'Cache-Control': 'public, max-age=0',
      },
    },
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
    resolve: {
      alias: [
        {
          find: '~',
          replacement: path.resolve(__dirname, 'src'),
        },
      ],
    },
    ssr: {
      noExternal: [
        '@mui/material',
        '@emotion/react',
      ],
    },

    plugins: [
      qwikCity({
        mdxPlugins: {
          rehypeSyntaxHighlight: false,
          remarkGfm: true,
          rehypeAutolinkHeadings: true,
        },
        mdx: {
          rehypePlugins: [
            [
              rehypePrettyCode as any,
              {
                theme: 'dark-plus',
                onVisitLine(node: any) {
                  // Prevent lines from collapsing in `display: grid` mode, and
                  // allow empty lines to be copy/pasted
                  if (node.children.length === 0) {
                    node.children = [{ type: 'text', value: ' ' }];
                  }
                },
                onVisitHighlightedLine(node: any) {
                  // Each line node by default has `class="line"`.
                  if (node.properties.className) {
                    node.properties.className.push('line--highlighted');
                  }
                },
                onVisitHighlightedWord(node: any, id: string) {
                  // Each word node has no className by default.
                  node.properties.className = ['word'];
                  if (id) {
                    const backgroundColor = {
                      a: 'rgb(196 42 94 / 59%)',
                      b: 'rgb(0 103 163 / 56%)',
                      c: 'rgb(100 50 255 / 35%)',
                    }[id];

                    const color = {
                      a: 'rgb(255 225 225 / 100%)',
                      b: 'rgb(175 255 255 / 100%)',
                      c: 'rgb(225 200 255 / 100%)',
                    }[id];
                    if (node.properties['data-rehype-pretty-code-wrapper']) {
                      node.children.forEach((childNode: any) => {
                        childNode.properties.style = ``;
                        childNode.properties.className = '';
                      });
                    }
                    node.properties.style = `background-color: ${backgroundColor}; color: ${color};`;
                  }
                },
              },
            ],
          ],
        },
      }),
      qwikVite({
        // entryStrategy: {
        //   type: 'smart',
        //   manual: {
        //     ...page,
        //     ...menus,
        //     ...repl,
        //   },
        // },
      }),
      partytownVite({
        dest: resolve('dist', '~partytown'),
      }),
      examplesData(routesDir),
      playgroundData(routesDir),
      tutorialData(routesDir),
      sourceResolver(resolve('.')),
      qwikReact(),
    ],
    build: {
      rollupOptions: {
        // For some unknown reason, types don't work from tsc
        // Try removing these any casts and see if it works
        onLog(level: any, log: any, defaultHandler: any) {
          if (level == 'warn' && log.code === 'MODULE_LEVEL_DIRECTIVE') {
            // Suppress errors like these:
            // FILE Module level directives cause errors when bundled, "use client" in FILE was ignored.
            return;
          }
          defaultHandler(level, log);
        },
        output: {
          assetFileNames: 'assets/[hash].[ext]',
        },
      },
    },
    clearScreen: false,
    server: {
      port: 3000,
    },
  };
});

export const page = {
  KnNE9eL0qfc: 'page',
  '9t1uPE4yoLA': 'page',
};

export const menus = {
  S0wV0vUzzSo: 'right',
  '5wL0DAwmu0A': 'left',
};

export const repl = bundle('repl', [
  's_XoQB11UZ1S0',
  's_AqHBIVNKf34',
  's_IRhp4u7HN3o',
  's_Qf2nEuUdHpM',
  's_oEksvFPgMEM',
  's_eePwnt3YTI8',
  's_iw211Du0bw8',
  's_lWGaPPYlcvs',
  's_uCl5Lf0Typ8',
  's_IW29huCoDkc',
]);

function bundle(bundleName: string, symbols: string[]) {
  return symbols.reduce(
    (obj, key) => {
      // Sometimes symbols are prefixed with `s_`, remove it.
      obj[key.replace('s_', '')] = obj[key] = bundleName;
      return obj;
    },
    {} as Record<string, string>
  );
}
