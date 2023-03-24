import rss from '@astrojs/rss';
import getAllPosts from '../lib/loaders/getAllPosts';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function get(context) {
	const posts = await getAllPosts()

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			title: post.title,
			description: post.description,
			pubDate: post.date,
			link: `/blog/${post.slug}/`,
		})),
	})
}
