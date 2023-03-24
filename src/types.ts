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
}

export interface PostList {
  posts: Post[]
  pageInfo: PageInfo
}

export interface PageInfo {
  startCursor: string
  hasNextPage: boolean
  endCursor: string
}