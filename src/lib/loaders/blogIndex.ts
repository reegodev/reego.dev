import client from '../client'
import { mapPost } from '../utils'
import LATEST_POSTS from '../../graphql/latestPosts'
import type { Post } from '../../types'

export const load = async (): Promise<Post[]> => {
  const { data } = await client.query(
    LATEST_POSTS,
    {
      owner: import.meta.env.GITHUB_REPO_OWNER,
      repo: import.meta.env.GITHUB_REPO_NAME,
      limit: 12,
    },
  ).toPromise()

  if (!data) {
    return []
  }

  const posts =  await Promise.all(
    data.repository.discussions.edges.map(mapPost),
  )

  return posts
}
