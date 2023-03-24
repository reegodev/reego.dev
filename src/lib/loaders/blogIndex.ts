import client from '../client'
import { mapPost } from '../utils'
import LATEST_POSTS from '../../graphql/latestPosts'
import type { PostList } from '../../types'

export const load = async (limit = 12, after?: string): Promise<PostList> => {
  const { data } = await client.query(
    LATEST_POSTS,
    {
      owner: import.meta.env.GITHUB_REPO_OWNER,
      repo: import.meta.env.GITHUB_REPO_NAME,
      limit,
      after: after || null,
    },
  ).toPromise()

  if (!data) {
    return {
      posts: [],
      pageInfo: {
        startCursor: '',
        endCursor: '',
        hasNextPage: false,
      }
    }
  }

  const posts =  await Promise.all(
    data.repository.discussions.edges.map(mapPost),
  )

  return {
    posts,
    pageInfo: data.repository.discussions.pageInfo,
  }
}
