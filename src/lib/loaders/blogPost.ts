import client from '$lib/client'
import type { LoadOutput, LoadInput } from '@sveltejs/kit'
import { mapPost } from '$lib/utils'
import FIND_POST_BY_SLUG from '$lib/graphql/findPostBySlug'

export const load = async ({ page }: LoadInput): Promise<LoadOutput> => {
  const { data } = await client.query(
    FIND_POST_BY_SLUG,
    {
      query: `"slug: ${page.params.slug}" in:body repo:${import.meta.env.VITE_GITHUB_REPO_OWNER}/${import.meta.env.VITE_GITHUB_REPO_NAME}`,
    },
  ).toPromise()

  if (!data || !data.search || !data.search.edges || !data.search.edges[0]) {
    return {
      status: 404,
      error: 'Not found',
    }
  }

  const post = await mapPost(data.search.edges[0])

  return {
    props: {
      post,
    },
    maxage: 60 * 60 * 24 * 365, // Cache indefinitely ( 1 year )
  }
}
