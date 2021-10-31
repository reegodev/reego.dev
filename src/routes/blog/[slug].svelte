<script context="module">
  export { load } from '$lib/loaders/blogPost'
</script>

<script lang="ts">
import '../../assets/post.css'
import type { Post } from '$lib/types';
import Seo from '../../components/Seo.svelte'
import Tag from '../../components/Tag.svelte'
import { getImageUrl } from '$lib/socialImage'

export let post: Post

const imageUrl = getImageUrl(post.title, post.description, post.date, post.readingTime)
</script>

<svelte:head>
  <Seo title="{post.title}" description="{post.description}" image="{imageUrl}"  />
</svelte:head>

<template>
  <div class="container mx-auto py-4 px-4">
    <div class="relative md:p-12">
      <article>
        <h1 class="text-xl md:text-2xl lg:text-5xl lg:pl-0 font-bold"><span class="text-primary">\</span> { post.title }</h1>
        <div class="flex justify-between md:justify-start space-x-8 text-sm md:text-lg mt-4">
          <div>
            <img class="inline-block h-4 w-auto mr-2" src="/calendar.svg" width="16" height="16" alt="Calendar icon" />
            <time class="align-middle">{ post.date }</time>
          </div>
          <div>
            <img class="inline-block h-4 w-auto mr-2"  src="/clock.svg" width="16" height="16" alt="Stopwatch icon" />
            <span class="align-middle">{ post.readingTime }</span>
          </div>
        </div>
        <div class="flex space-x-2 mt-4 items-center">
        {#each post.tags as tag}
          <Tag v-for="tag of post.tags" tag="{ tag }" />
        {/each}
        </div>
        <div class="post-content mt-12 text-lg">
          {@html post.content}
        </div>
        <div class="mt-12 text-lg">
          I hope this post was an interesting read!<br>
          If you have questions or want to give feedbacks, I encourage you to write a comment on the <a class="underline" href="{post.githubUrl}" target="_blank" rel="noopener noreferrer nofollow">GitHub discussion of this post</a> ( I'm still working on directly integrating comments on the page, please bear with me )<br>
          <br>
          Cheers!
        </div>
      </article>
    </div>
  </div>
</template>
