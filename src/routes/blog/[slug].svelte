<script context="module">
  export { load } from '$lib/loaders/blogPost'
</script>

<script lang="ts">
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

<div class="container mx-auto py-4 px-4">
  <div class="relative md:p-12">
    <article>
      <div class="mb-5 flex justify-between items-baseline">
        <div class="flex justify-between md:justify-start space-x-8 text-sm md:text-lg text-gray-400">
          <div>
            <time class="align-middle">{ post.date }</time>
          </div>
          <div>
            <span class="align-middle">{ post.readingTime }</span>
          </div>
        </div>
        <div>
          <button type="button" class="share-btn hidden px-4 text-white">
            <img class="inline-block h-5 w-auto mr-2" src="/share.svg" width="16" height="16" alt="Share icon" />
            Share
          </button>
        </div>
      </div>
      <h1 class="post-title text-3xl lg:text-5xl lg:pl-0 font-bold">{ post.title }</h1>
      <p class="hidden post-description">{ post.description }</p>
      <div class="post-content mt-12 text-xl">
        {@html post.content}
      </div>
      <div class="mt-12 text-lg">
        I hope this post was an interesting read!<br>
        If you have questions or want to give feedbacks, Feel free to leave a comment below or directly on the <a class="underline" href="{post.githubUrl}" target="_blank" rel="noopener noreferrer nofollow">GitHub discussion of this post</a><br>
        <br>
        Cheers!
      </div>
    </article>

    <aside class="mt-12">
      <script src="https://giscus.app/client.js"
        data-repo="reegodev/reego.dev"
        data-repo-id="R_kgDOGTk7pw"
        data-mapping="number"
        data-term="{ post.number }"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-theme="dark_dimmed"
        data-lang="en"
        crossorigin="anonymous"
        async>
      </script>
    </aside>
  </div>
  <script>
      const shareData = {
        title: document.querySelector('.post-title').textContent,
        text: document.querySelector('.post-description').textContent,
        url: window.location.href,
      }
      if (navigator.canShare && navigator.canShare(shareData)) {
        const btn = document.querySelector('.share-btn')
        if (btn) {
          btn.classList.remove('hidden')
          btn.classList.add('inline-block')
          btn.addEventListener('click', function() {
            navigator.share(shareData)
              .then(() => console.log('Share was successful.'))
              .catch((error) => console.log('Sharing failed', error));
          })
        }
      }
  </script>
</div>
<style>
@screen xl {
  .container {
    max-width: 1120px;
  }
}

.post-content :global(h2) {
  @apply font-bold text-xl md:text-2xl mt-20 mb-4;
}

.post-content :global(h3),
.post-content :global(h4) {
  @apply font-bold text-lg md:text-lg mt-10 mb-2;
}

.post-content :global(pre) {
  @apply my-4 md:my-8;
}

.post-content :global(pre code) {
  @apply font-mono block p-4 text-white leading-relaxed text-base overflow-x-auto;
  background: hsl(220, 13%, 18%);
}

.post-content :global(p:not(:last-child)) {
  @apply mb-4;
}

.post-content :global(code) {
  @apply font-mono inline-block align-middle text-primary px-2 py-1 leading-none text-xs md:text-xs mx-1;
  background: hsl(220, 13%, 18%);
}

.post-content :global(a),
a {
  word-break: break-all;
  text-decoration: underline;
  text-decoration-color: theme('colors.white');
  text-underline-offset: 2px;
}

.post-content :global(iframe) {
  @apply my-8 w-full;
  aspect-ratio: 9 / 16;
}

@screen md {
  .post-content :global(iframe) {
    aspect-ratio: 16 / 9;
  }
}

@screen md {
  .post-content :global(a) {
    word-break: initial;
  }
}

:global(.post-content blockquote) {
  @apply p-4 my-8 pl-14 border border-gray-700 bg-gray-900 relative;
}

:global(.post-content blockquote:before) {
  content: 'i';
  transform: translateY(-50%);
  font-family: cursive;
  @apply absolute top-1/2 left-4 text-primary font-bold w-6 h-6 rounded-full flex items-center justify-center;
}

.post-content :global(img) {
  @apply my-12 mx-auto;
}

:global(.post-content ul) {
  padding-left: 2em;
  margin: 1em 0 2em;
  @apply list-disc;
}

:global(.post-content ol) {
  padding-left: 2em;
  margin: 1em 0 2em;
  @apply list-decimal;
}

:global(.post-content ul > li) {
  @apply my-2;
}

:global(.post-content ol > li) {
  @apply my-2;
}

:global(.post-content ol > li::marker) {
  @apply font-bold text-primary;
}

:global(.post-content ul > li::marker) {
  @apply font-bold text-primary;
}

:global(pre code.hljs) {
  display: block;
  overflow-x: auto;
  padding: 1em
}

:global(code.hljs) {
  padding: 3px 5px
}

/*!
Theme: GitHub Dark Dimmed
Description: Dark dimmed theme as seen on github.com
Author: github.com
Maintainer: @Hirse
Updated: 2021-05-15

Colors taken from GitHub's CSS
*/
:global(.hljs) {
  color: #adbac7;
  background: #22272e
}


:global(.hljs-doctag),
:global(.hljs-keyword),
:global(.hljs-meta .hljs-keyword),
:global(.hljs-template-tag),
:global(.hljs-template-variable),
:global(.hljs-type),
:global(.hljs-variable.language_) {
  color: #f47067
}

:global(.hljs-title),
:global(.hljs-title.class_),
:global(.hljs-title.class_.inherited__),
:global(.hljs-title.function_) {
  color: #dcbdfb
}

:global(.hljs-attr),
:global(.hljs-attribute),
:global(.hljs-literal),
:global(.hljs-meta),
:global(.hljs-number),
:global(.hljs-operator),
:global(.hljs-selector-attr),
:global(.hljs-selector-class),
:global(.hljs-selector-id),
:global(.hljs-variable) {
  color: #6cb6ff
}

:global(.hljs-meta .hljs-string),
:global(.hljs-regexp),
:global(.hljs-string) {
  color: #96d0ff
}

:global(.hljs-built_in),
:global(.hljs-symbol) {
  color: #f69d50
}

:global(.hljs-code),
:global(.hljs-comment),
:global(.hljs-formula) {
  color: #768390
}

:global(.hljs-name),
:global(.hljs-quote),
:global(.hljs-selector-pseudo),
:global(.hljs-selector-tag) {
  color: #8ddb8c
}

:global(.hljs-subst) {
  color: #adbac7
}

:global(.hljs-section) {
  color: #316dca;
  font-weight: 700
}

:global(.hljs-bullet) {
  color: #eac55f
}

:global(.hljs-emphasis) {
  color: #adbac7;
  font-style: italic
}

:global(.hljs-strong) {
  color: #adbac7;
  font-weight: 700
}

:global(.hljs-addition) {
  color: #b4f1b4;
  background-color: #1b4721
}

:global(.hljs-deletion) {
  color: #ffd8d3;
  background-color: #78191b
}
</style>
