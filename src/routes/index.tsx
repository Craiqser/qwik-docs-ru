import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
	return (
		<>
			<div class="builder-columns">
				<div class="builder-column">
					<div></div>
				</div>
			</div>
			<h2>Commands</h2>

			<table class="commands">
				<tr>
					<td>
						<code>npm run dev</code>
					</td>
					<td>Start the dev server and watch for changes.</td>
				</tr>
				<tr>
					<td>
						<code>npm run preview</code>
					</td>
					<td>Production build and start preview server.</td>
				</tr>
				<tr>
					<td>
						<code>npm run build</code>
					</td>
					<td>Production build.</td>
				</tr>
				<tr>
					<td>
						<code>npm run qwik add</code>
					</td>
					<td>Select an integration to add.</td>
				</tr>
			</table>

			<h2>Add Integrations</h2>

			<table class="commands">
				<tr>
					<td>
						<code>npm run qwik add cloudflare-pages</code>
					</td>
					<td>
						<a href="https://developers.cloudflare.com/pages" target="_blank">
							Cloudflare Pages Server
						</a>
					</td>
				</tr>
				<tr>
					<td>
						<code>npm run qwik add express</code>
					</td>
					<td>
						<a href="https://expressjs.com/" target="_blank">
							Nodejs Express Server
						</a>
					</td>
				</tr>
				<tr>
					<td>
						<code>npm run qwik add netlify-edge</code>
					</td>
					<td>
						<a href="https://docs.netlify.com/" target="_blank">
							Netlify Edge Functions
						</a>
					</td>
				</tr>
				<tr>
					<td>
						<code>npm run qwik add static-node</code>
					</td>
					<td>
						<a
							href="https://qwik.builder.io/qwikcity/static-site-generation/overview/"
							target="_blank"
						>
							Static Site Generation (SSG)
						</a>
					</td>
				</tr>
			</table>
		</>
	);
});

export const head: DocumentHead = {
	title: 'Welcome to Qwik Docs Starter',
};
