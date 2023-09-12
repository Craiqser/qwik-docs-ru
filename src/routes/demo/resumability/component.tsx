import {
  type QwikIntrinsicElements,
  component$,
  useStylesScoped$,
  Slot,
} from '@builder.io/qwik';
import CSS from './component.css?inline';
import { type HoverEvent } from './index';

export const UnderstandingResumability = component$(() => {
  useStylesScoped$(CSS);
  return (
    <div class="demo">
      <div class="hydration">
        <div class="strategy">Гидратация</div>

        <div class="thread">
          <div class="thread-label">(main)</div>
          <div class="group">
            <div
              class="html box"
              onHover$={(e: HoverEvent) =>
                e.detail(
                  <Callout target={e.target as HTMLElement}>
                    <p>
                      Серверная часть рендерит HTML для мгновенного отображения приложения.
                    </p>
                    <ul>
                      <li>HTML из CDN (или SSG)</li>
                    </ul>
                  </Callout>
                )
              }
            />
            <div
              class="js box"
              onHover$={(e: HoverEvent) =>
                e.detail(
                  <Callout target={e.target as HTMLElement}>
                    <p>HTML запускает загрузку JavaScript-приложения.</p>
                    <ul>
                      <li>
                        Дублирование: JS содержит все строки, находящиеся в HTML.
                      </li>
                      <li>
                        Любое взаимодействие с пользователем теряется (если только не существует
                        какая-либо форма системы повтора событий).
                      </li>
                    </ul>
                  </Callout>
                )
              }
            />
            <div
              class="execution box"
              onHover$={(e: HoverEvent) =>
                e.detail(
                  <Callout target={e.target as HTMLElement}>
                    <p>
                      Приложение должно быть выполнено, чтобы платформа могла
                      собирать слушателей событий, компоненты и состояние.
                    </p>
                    <ul>
                      <li>
                        Это рекурсивный процесс, который начинается с
                        корневого компонента.
                      </li>
                      <li>
                        Код выполняется в медленном интерпретативном режиме (без
                        JIT).
                      </li>
                    </ul>
                  </Callout>
                )
              }
            />
            <div
              class="reconciliation box"
              onHover$={(e: HoverEvent) =>
                e.detail(
                  <Callout target={e.target as HTMLElement}>
                    <p>
                      События прикреплены, чтобы сделать приложение интерактивным.
                    </p>
                  </Callout>
                )
              }
            />
            <div
              onHover$={(e: HoverEvent) =>
                e.detail(
                  <Callout target={e.target as HTMLElement}>
                    <p>Теперь с приложением можно взаимодействовать.</p>
                  </Callout>
                )
              }
            >
              <ReadyIcon />
            </div>
          </div>
        </div>
      </div>
      <div class="space"></div>
      <div class="resumability">
        <div class="strategy">Возобновляемость</div>
        <div class="thread">
          <div class="thread-label">(main)</div>
          <div class="group">
            <div
              class="html box"
              onHover$={(e: HoverEvent) =>
                e.detail(
                  <Callout target={e.target as HTMLElement}>
                    <p>
                      Серверная часть рендерит HTML для мгновенного отображения приложения.
                    </p>
                    <ul>
                      <li>HTML из CDN (или SSG)</li>
                      <li>Содержит глобальный прослушиватель QwikLoader (1kb/~1ms).</li>
                    </ul>
                  </Callout>
                )
              }
            ></div>
            <div
              onHover$={(e: HoverEvent) =>
                e.detail(
                  <Callout target={e.target as HTMLElement}>
                    <p>Теперь с приложением можно взаимодействовать.</p>
                    <ul>
                      <li>Обратите внимание, что JS загружается параллельно.</li>
                      <li>
                        В маловероятном случае, когда пользователь взаимодействует до того,
                        как JS будет загружен, может быть небольшая задержка (но всегда меньше
                        чем стоимость гидратации).
                      </li>
                    </ul>
                  </Callout>
                )
              }
            >
              <ReadyIcon />
            </div>
          </div>
        </div>
        <div class="thread">
          <div class="thread-label">(worker)</div>
          <div
            class="group"
            style={{ 'margin-left': '120px' }}
            onHover$={(e: HoverEvent) =>
              e.detail(
                <Callout target={e.target as HTMLElement}>
                  <p>Параллельно загружаемый JavaScript.</p>
                  <ul>
                    <li>
                      JS заранее загружается сервис-воркером вне основного
                      потока в кеш браузера. После скачивания
                      интерактивность приложения не зависит от сети.
                    </li>
                    <li>
                      JS не переносится в основной поток до взаимодействия с пользователем.
                      Это оставляет основной поток свободным для других задач.
                    </li>
                    <li>
                      JS разделён на множество небольших частей, это позволяет
                      сервис-воркеру определить приоритет порядка загрузки фрагментов
                      на случай, если пользователь взаимодействует до загрузки всего JS.
                    </li>
                    <li>
                      Связанный код автоматически группируется в чанки, чтобы
                      каждый чанк содержал только то, что необходимо для обработки
                      пользовательского взаимодействия.
                    </li>
                  </ul>
                </Callout>
              )
            }
          >
            <div class="js-chunk box"></div>
            <div class="js-chunk box"></div>
            <div class="js-chunk box"></div>
            <div class="js-chunk box"></div>
            <div class="js-chunk box"></div>
          </div>
        </div>
      </div>
      <h1 class="label">Легенда</h1>
      <div class="legend">
        <div class="group">
          <div class="html legend-box" />
          <div class="label">HTML</div>
        </div>
        <div class="group">
          <div class="js legend-box" />
          <div class="label">Загрузка JS</div>
        </div>
        <div class="group">
          <div class="execution legend-box" />
          <div class="label">Выполнение JS</div>
        </div>
        <div class="group">
          <div class="reconciliation legend-box" />
          <div class="label">DOM-слушатели</div>
        </div>
        <div class="group">
          <div class="legend-box">
            <ReadyIcon />
          </div>
          <div class="label">Готово</div>
        </div>
      </div>
    </div>
  );
});

export function ReadyIcon(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3em"
      height="3em"
      viewBox="0 0 48 48"
      {...props}
      key={key}
    >
      <g
        fill="green"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      >
        <path d="M24 4v8"></path>
        <path
          d="m22 22l20 4l-6 4l6 6l-6 6l-6-6l-4 6l-4-20Z"
          clipRule="evenodd"
        ></path>
        <path d="m38.142 9.858l-5.657 5.657M9.858 38.142l5.657-5.657M4 24h8M9.858 9.858l5.657 5.657"></path>
      </g>
    </svg>
  );
}

export const Callout = component$<{ target: HTMLElement }>(({ target }) => {
  const rect = target.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height;
  return (
    <div
      style={{
        position: 'absolute',
        top: y + 'px',
        left: x + 'px',
        border: '1px solid black',
        backgroundColor: 'white',
        color: 'black',
        padding: '.5em',
      }}
    >
      <Slot />
    </div>
  );
});
