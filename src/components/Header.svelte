<script>
import { socialLinks } from '$lib/data/socialLinks'
import { page } from '$app/stores'

const isHome = $page.path === '/'
const isBlog = $page.path.startsWith('/blog')
</script>

<header class="py-4 px-4 top-0 left-0 right-0 z-10 flex items-center justify-between">
  <div class="w-auto md:w-1/3">
    <a href="/">
      <img alt="reego.dev logo" src="/logo.svg" width="16" height="16" class="w-5 h-auto">
    </a>
  </div>

  <nav class="w-auto md:w-1/3">
    <ul class="space-x-4 lg:text-center font-bold uppercase text-lg main-menu">
      <li class="inline-block">
        <a href="/" class="px-2" class:active="{ isHome }">About</a>
      </li>
      <li class="inline-block">
        <a href="/blog" class="px-2" class:active="{ isBlog }">Blog</a>
      </li>
    </ul>
  </nav>

  <nav class="w-auto md:w-1/3">
    <ul class="space-x-4 text-right uppercase text-lg main-menu">
      {#each socialLinks as link}
      <li class="inline-block">
        <a href="{link.url}" target="_blank" rel="noopener noreferrer nofollow" class="font-semibold hover:underline inline-block p-1">
          <img src="{link.icon}" alt="{link.name}" height="24px" width="auto" class="h-5 w-auto inline-block" />
          <span class="sr-only">{ link.name }</span>
        </a>
      </li>
      {/each}
    </ul>
  </nav>
</header>

<style>
.main-menu .active {
  @apply font-bold underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
  text-decoration-color: theme('colors.primary');
}
</style>