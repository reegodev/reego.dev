import client from '../client'
import { mapPost } from '../utils'
import LATEST_POSTS from '../../graphql/latestPosts'
import type { Post } from '../../types'

export const load = async (): Promise<Post[]> => {
  const res = await client.query(
    LATEST_POSTS,
    {
      owner: import.meta.env.GITHUB_REPO_OWNER,
      repo: import.meta.env.GITHUB_REPO_NAME,
      limit: 2,
    },
  ).toPromise()

  if (!res.data) {
    return []
  }

  const posts =  await Promise.all(
    res.data.repository.discussions.edges.map(mapPost),
  )

  return posts
}
