<script lang="ts">
import type { Post } from '$lib/types'
import Card from './Card.svelte'
import Tag from './Tag.svelte'

export let post: Post

const url = '/blog/' + post.slug
</script>

<a href="{ url }" class="block h-full">
  <Card>
    <div class="flex flex-col justify-between" slot="default">
      <div class="flex justify-between text-sm mb-8 text-gray-400">
        <time class="align-middle">{ post.date }</time>
        <span class="align-middle">{ post.readingTime }</span>
      </div>
      <h1 class="text-xl md:text-2xl font-semibold">{ post.title }</h1>
      <p class="text-md leading-tight mt-8 text-gray-300">{ post.description }</p>
    </div>
  </Card>
</a>
