import client from '../client'
import { mapPost } from '../utils'
import FIND_POST_BY_SLUG from '../../graphql/findPostBySlug'
import type { Post } from '../../types'

export const load = async ({ slug }: { slug: string }): Promise<Post | null> => {
  if (!slug) {
    return null
  }

  const { data } = await client.query(
    FIND_POST_BY_SLUG,
    {
      query: `"slug: ${slug}" in:body repo:${import.meta.env.GITHUB_REPO_OWNER}/${import.meta.env.GITHUB_REPO_NAME}`,
    },
  ).toPromise()

  if (!data || !data.search || !data.search.edges || !data.search.edges[0]) {
    return null
  }

  const post = await mapPost(data.search.edges[0])

  return post
}
