<article class="card border border-black h-full relative flex flex-col hover:border-primary">
  {#if $$slots.header}
    <div class="overflow-hidden">
      <slot name="header" />
    </div>
  {/if}
  <div class="p-4 rounded-lg filter drop-shadow-xl flex-grow">
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
  background-color: #151515;
  transition: border-color 0.25s ease-out;
}
</style>
