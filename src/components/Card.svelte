<article class="card rounded-lg border bg-gray-900 border-gray-700 h-full relative flex flex-col hover:drop-shadow-primary">
  {#if $$slots.header}
    <div class="overflow-hidden">
      <slot name="header" />
    </div>
  {/if}
  <div class="p-8 flex-grow flex flex-col justify-between">
    <slot />
  </div>
  {#if $$slots.footer}
    <div v-if="$slots.footer" class="overflow-hidden">
      <slot name="footer" />
    </div>
  {/if}
</article>
<style>
.card {
  transition: filter 0.25s ease-out;
}
</style>
