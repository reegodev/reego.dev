import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import matter from 'gray-matter';
import { readingTime } from 'reading-time-estimator';
import type { Post } from '../types';
import vue from './languages/vue';

export async function mapPost({ node }: { node: any }): Promise<Post> {
	const { data: frontmatter, content: markdownContent } = matter(node.body);

	const content = (await unified()
		.use(remarkParse)
		.use(remarkRehype, {
			allowDangerousHtml: true,
		})
		.use(rehypeRaw)
		.use(rehypeStringify, )
		.use(rehypeHighlight, {
			ignoreMissing: true,
      languages: {
				vue
			},
		})
		.process(markdownContent)).toString();

	const date = new Date(node.createdAt);

	return {
		id: node.id,
		slug: frontmatter && frontmatter.slug,
		title: node && node.title,
		description: frontmatter && frontmatter.description,
		content,
		date,
		readingTime: readingTime(content, 250).text,
		githubUrl: node.url,
		number: node.number
	};
}

export function formatDate(date: Date) {
	return date.toLocaleDateString('en-us', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	})
}
