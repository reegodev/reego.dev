<script lang="ts">
import type { Post } from '$lib/types'
import PostCard from './PostCard.svelte'
export let posts: Post[]
</script>

<div class="latest-posts w-full px-0 md:px-4 lg:px-8 py-8 container mx-auto">
  <h2 class="text-md tracking-wide uppercase">Latest articles</h2>
  <div class="mt-8 mx-auto space-y-8">
    {#each posts as post}
    <div class="w-full">
      <PostCard post="{post}" />
    </div>
    {/each}
  </div>
  <div class="mt-8 text-center">
    <a href="/blog" class="inline-block rounded-lg px-8 py-2 font-bold bg-primary text-black">
      View all<span class="inline-block ml-2 font-bold">→</span>
    </a>
  </div>
</div>

<style>
  @screen 2xl {
    .latest-posts {
      max-width: 600px;
    }
  }
</style>