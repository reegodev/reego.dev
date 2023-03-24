import type { Post } from "../../types";
import { load } from "./blogIndex";

export default async () => {
  const getPosts = async (limit: number, after?: string): Promise<Post[]> => {
    const { posts, pageInfo } = await load(limit, after);
    if (pageInfo.hasNextPage) {
      return posts.concat(await getPosts(limit, pageInfo.endCursor))
    }

    return posts;
  }

  const posts = await getPosts(100);
  return posts
}
