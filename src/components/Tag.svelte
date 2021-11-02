<script setup lang="ts">
import type { Tag } from '$lib/types'
export let tag: Tag

const cssVars = Object.keys(tag.color)
  .map(fragment => `--label-${fragment}: ${tag.color[fragment]}`)
  .join('; ')

</script>

<span class="tag px-2 py-1 border border-current rounded text-sm leading-none" style="{cssVars}">{ tag.name }</span>

<style scoped>
/* Logic shamelessly borrowed from Github */
.tag {
  --lightness-threshold: 0.6;
  --background-alpha: 0.18;
  --border-alpha: 0.3;
  --perceived-lightness: 0.1;
  --lightness-switch: 0.34;
  --lighten-by: calc(((var(--lightness-threshold) - var(--perceived-lightness)) * 100) * var(--lightness-switch));
  background: hsla(var(--label-h), calc(var(--label-s) * 1%), calc(var(--label-l) * 1%), var(--background-alpha));
  color: hsl(var(--label-h), calc(var(--label-s) * 1%), calc((var(--label-l) + var(--lighten-by)) * 1%));
  border-color: hsla(var(--label-h), calc(var(--label-s) * 1%), calc((var(--label-l) + var(--lighten-by)) * 1%), var(--border-alpha));
}
</style>
