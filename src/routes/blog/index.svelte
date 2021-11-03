<script context="module">
  export { load } from '$lib/loaders/blogIndex'
</script>

<script lang="ts">
import type { Post } from '$lib/types';
import Seo from '../../components/Seo.svelte'
import PostGrid from '../../components/PostGrid.svelte'

export let posts: Post[]
</script>

<svelte:head>
	<Seo title="Blog" description="Index of my personal blog. I mostly write about web technologies." />
</svelte:head>

<div class="container mx-auto px-4 md:px-8">
	<h1 class="text-white text-5xl font-bold mt-12">Blog</h1>
	<PostGrid posts="{posts}" />
</div>

