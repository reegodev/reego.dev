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
  date: Date
  readingTime: string
  githubUrl: string
  tags: Tag[]
}
