import { component$, useStyles$ } from '@builder.io/qwik';
import { DiscordLogo } from './../svgs/discord-logo';
import { GithubLogo } from './../svgs/github-logo';
import { QwikLogo } from './../svgs/qwik-logo';
import { TwitterLogo } from './../svgs/twitter-logo';
import { useLocation } from '@builder.io/qwik-city';

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
						<a
							href="/docs/overview/"
							class={{ active: pathname.startsWith('/docs') }}
						>
							<span>Docs</span>
						</a>
					</li>
					<li>
						<a
							href="/qwikcity/overview/"
							class={{ active: pathname.startsWith('/qwikcity') }}
						>
							<span>Qwik City</span>
						</a>
					</li>
					<li>
						<a
							href="https://github.com/BuilderIO/qwik"
							target="_blank"
							title="Github"
						>
							<GithubLogo width={22} height={22} />
						</a>
					</li>
					<li>
						<a
							href="https://twitter.com/QwikDev"
							target="_blank"
							title="Twitter"
						>
							<TwitterLogo width={22} height={22} />
						</a>
					</li>
					<li>
						<a
							href="https://qwik.builder.io/chat"
							target="_blank"
							title="Discord"
						>
							<DiscordLogo width={22} height={22} />
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
});
