<script lang="ts">
import type { Post } from '$lib/types'
import Card from './Card.svelte'
import Tag from './Tag.svelte'

export let post: Post

const url = '/blog/' + post.slug
</script>

<a href="{ url }" class="block h-full">
  <Card>
    <div class="flex flex-col justify-between">
      <h1 class="text-md md:text-xl font-semibold">{ post.title }</h1>
      <p class="text-md leading-tight mt-4 text-gray-300">{ post.description }</p>
      <div class="flex space-x-2 mt-4 items-center">
      {#each post.tags as tag}
        <Tag v-for="tag of post.tags" tag="{ tag }" />
      {/each}
      </div>
    </div>
    <template #footer>
      <div class="flex justify-between text-sm pt-4">
        <div>
          <img alt="Calendar icon" class="inline-block h-4 w-auto mr-2" src="/calendar.svg"/>
          <time class="align-middle">{ post.date }</time>
        </div>
        <div>
          <img alt="Stopwatch icon" class="inline-block h-4 w-auto mr-2"  src="/clock.svg"/>
          <span class="align-middle">{ post.readingTime }</span>
        </div>
      </div>
    </template>
  </Card>
</a>
