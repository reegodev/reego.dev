import markdownIt from 'markdown-it'
import hljs from 'highlight.js'
import matter from 'gray-matter'
import { readingTime } from 'reading-time-estimator'
import type { Post, HSL, Tag } from '$lib/types'

hljs.registerLanguage("graphql", (e) => {
  return {
    aliases: ["gql"],
    keywords: {
      keyword:
        "query mutation subscription|10 input schema implements type interface union scalar fragment|10 enum on ...",
      literal: "ID ID! String Float Int Boolean",
      variable: "true false null"
    },
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.NUMBER_MODE,
      {
        className: "literal",
        begin: "[^\\w][A-Z][a-z]",
        end: "\\W",
        excludeEnd: true
      },
      {
        className: "literal",
        begin: ":\\s\\[",
        end: "[\\]!]{1,3}",
        excludeBegin: true,
        excludeEnd: true
      },
      {
        className: "type",
        begin: "[^\\w](?!ID)[A-Z][A-Z]",
        end: "\\W",
        excludeEnd: true
      },
      {
        className: "name",
        begin: "\\$",
        end: "\\W",
        excludeEnd: true
      },
      {
        className: "meta",
        begin: "@",
        end: "\\W",
        excludeEnd: true
      }
    ],
    illegal: /([;<']|BEGIN)/
  }
})

export const hexToHSL = (hex: string): HSL => {
  const hsl: HSL = {
    h: 0,
    s: 0,
    l: 0,
  }

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) {
    return hsl
  }
  let r = parseInt(result[1], 16);
  let g = parseInt(result[2], 16);
  let b = parseInt(result[3], 16);
    r /= 255, g /= 255, b /= 255;


  const cmin = Math.min(r,g,b),
    cmax = Math.max(r,g,b),
    delta = cmax - cmin;
  let  h = 0,
    s = 0,
    l = 0;

  
  if (delta == 0)
    h = 0;
  // Red is max
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax == g)
    h = (b - r) / delta + 2;
  // Blue is max
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);
    
  // Make negative hues positive behind 360°
  if (h < 0)
      h += 360;

  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    
  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  hsl.l = l
  hsl.s = s
  hsl.h = h

  return hsl;
}

export async function mapPost({ node }: { node: any }): Promise<Post> {
  const { data: frontmatter, content: markdownContent } = matter(node.body)
  const md = new markdownIt({
    html: true,
    highlight: function (str, language) {
      if (language && hljs.getLanguage(language)) {
        try {
          return hljs.highlight(str, {
            language,
            ignoreIllegals: true,
          }).value;
        } catch (__) {
          //
        }
      }
  
      return '';
    }
  })
  const content = md.render(markdownContent)

  const date = new Date(node.createdAt)
  const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`

  return {
    id: node.id,
    slug: frontmatter && frontmatter.slug,
    title: node && node.title,
    description: frontmatter && frontmatter.description,
    content,
    date: formattedDate,
    readingTime: readingTime(content, 250).text,
    tags: node && node.labels && node.labels.edges.map(({ node }: { node: any }): Tag => {
      return {
        id: node.id,
        name: node.name,
        color: hexToHSL(node.color),
      }
    }),
    githubUrl: node.url,
    number: node.number,
  }
}
