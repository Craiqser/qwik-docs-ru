import { component$, useStyles$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { QwikLogo } from './../svgs/qwik-logo';
import styles from './header.css?inline';

export default component$(() => {
	useStyles$(styles);

	const { pathname } = useLocation();

	return (
		<header class="header-container">
			<div class="header-inner">
				<div class="header-logo">
					<a href="/">
						<QwikLogo width={180} height={50} />
					</a>
				</div>
				<ul class="header-menu">
					<li>
						<a href="/docs/overview/" class={{ active: pathname.startsWith('/docs') }}
							// onClick$={closeMenu}
						>
							<span>Docs</span>
						</a>
					</li>
					<li>
						<a href="/qwikcity/overview/" class={{ active: pathname.startsWith('/qwikcity') }}
							// onClick$={closeMenu}
						>
							<span>Qwik City</span>
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
});
