<script context="module">
  export { load } from '$lib/loaders/home'
</script>

<script>
import { socialLinks } from '$lib/data/socialLinks'
import LatestPosts from '../components/LatestPosts.svelte'
import Seo from '../components/Seo.svelte'
export let posts
</script>

<svelte:head>
	<Seo title="Matteo Rigon" description="Welcome to my personal blog. I mostly write about web technologies." />
</svelte:head>

<div class="container mx-auto flex justify-between px-4 flex-wrap lg:flex-nowrap">
  <div class="h-full flex flex-col justify-center w-full lg:w-2/3 px-0 md:px-4 lg:px-8 lg:pr-24 xl:pr-0 mt-12 lg:mt-0">
    <h1 class="text-5xl md:text-6xl font-bold">Hi, I'm <span class="inline-block text-primary font-bold">Rigo</span> 👋</h1>
    <div class="text-xl text-gray-300 mt-4">
      <p>I'm a software engineer based in Italy 🇮🇹</p>
      <p class="inline lg:block">Avid learner, all-around web enthusiast, always</p>
      <p class="inline lg:block">experimenting with new technologies and trends.</p>
    </div>
    <div class="mt-12 w-full text-sm md:text-base">
      <ul class="flex flex-col items-start flex-wrap space-y-6 md:mt-0">
        {#each socialLinks as link}
        <li>
          <a href="{link.url}" target="_blank" rel="noopener noreferrer nofollow" class="social-link font-semibold hover:underline inline-block p-1 pl-0">
            <img src="{link.icon}" alt="{link.name}" height="24" width="24" class="h-6 w-auto inline-block mr-4" />{link.label}
          </a>
        </li>
        {/each}
      </ul>
    </div>
  </div>
  <div class="h-full md:w-full lg:w-auto flex flex-col justify-center xl:pl-14 mt-12 lg:mt-0">
    <LatestPosts posts="{ posts }" />
  </div>
</div>
<style>
.social-link {
  @apply font-bold;

  text-underline-offset: 4px;
  text-decoration-thickness: 0.5px;
  text-decoration-color: theme('colors.primary');
}
</style>