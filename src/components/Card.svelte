<article class="card rounded-lg border bg-gray-800 border-gray-600 h-full relative flex flex-col hover:border-primary">
  {#if $$slots.header}
    <div class="overflow-hidden">
      <slot name="header" />
    </div>
  {/if}
  <div class="p-4 filter drop-shadow-xl flex-grow flex flex-col justify-between">
    <slot />
  </div>
  {#if $$slots.footer}
    <div v-if="$slots.footer" class="px-4 pb-4 overflow-hidden">
      <slot name="footer" />
    </div>
  {/if}
</article>
<style>
.card {
  transition: border-color 0.25s ease-out;
}
</style>
