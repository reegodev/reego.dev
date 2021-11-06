export interface HSL {
  h: number;
  s: number;
  l: number;
}

export interface Tag {
  name: string
  color: HSL
  id: string
}

export interface Post {
  id: string
  slug: string
  title: string
  description: string
  content: string
  date: string
  readingTime: string
  githubUrl: string
  number: number
  tags: Tag[]
}
