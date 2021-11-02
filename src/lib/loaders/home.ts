import client from '$lib/client'
import type { LoadOutput } from '@sveltejs/kit'
import { mapPost } from '$lib/utils'
import LATEST_POSTS from '$lib/graphql/latestPosts'

export const load = async (): Promise<LoadOutput> => {
  const res = await client.query(
    LATEST_POSTS,
    {
      owner: import.meta.env.VITE_GITHUB_REPO_OWNER,
      repo: import.meta.env.VITE_GITHUB_REPO_NAME,
      limit: 2,
    },
  ).toPromise()

  if (!res.data) {
    return {
      status: 404,
      error: 'Not found',
    }
  }

  const posts =  await Promise.all(
    res.data.repository.discussions.edges.map(mapPost),
  )

  return {
    props: {
      posts,
    },
    maxage: 60 * 60 * 24 * 365, // Cache indefinitely ( 1 year )
  }
}
