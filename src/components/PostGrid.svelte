<script lang="ts">
import type { Post } from '$lib/types'
import PostCard from './PostCard.svelte'
export let posts: Post[]
</script>

<div class="my-12">
  <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
    {#each posts as post}
    <div v-for="post of posts">
      <PostCard post="{post}" />
    </div>
    {/each}
  </div>
</div>
