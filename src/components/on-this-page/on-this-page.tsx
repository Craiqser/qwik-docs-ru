import { useContent, useLocation } from '@builder.io/qwik-city';
import { component$, useStyles$ } from '@builder.io/qwik';
import styles from './on-this-page.css?inline';

export default component$(() => {
	useStyles$(styles);

	const { headings } = useContent();
	const contentHeadings = headings?.filter((h) => h.level === 2 || h.level === 3) || [];

	const { pathname } = useLocation();
	const editUrl = `https://github.com/Craiqser/qwik-docs-ru/edit/main/src/routes${pathname}/index.mdx`;

	return (
		<aside class="on-this-page">
			{contentHeadings.length > 0 ? (
				<>
					<h6>На этой странице</h6>
					<ul>
						{contentHeadings.map((h) => (
							<li>
								<a
									href={`#${h.id}`}
									class={{
										block: true,
										indent: h.level > 2,
									}}
								>
									{h.text}
								</a>
							</li>
						))}
					</ul>
				</>
			) : null}

			<h6>Дополнительно</h6>
			<ul>
				<li>
					<a href={editUrl} target="_blank">
						Редактировать
					</a>
				</li>
				<li>
					<a href="https://qwik.builder.io/chat" target="_blank">
						Сообщество
					</a>
				</li>
				<li>
					<a href="https://github.com/BuilderIO/qwik" target="_blank">
						Github
					</a>
				</li>
				<li>
					<a href="https://twitter.com/QwikDev" target="_blank">
						@QwikDev
					</a>
				</li>
			</ul>
		</aside>
	);
});
