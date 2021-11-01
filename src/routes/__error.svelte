<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				status,
			}
		};
	}
</script>

<script>
	export let status;
</script>

<div class="container mx-auto flex flex-col  justify-center items-center">
  <h1 class="text-8xl font-bold">{status}</h1>
  <p class="text-4xl">oops!</p>
  <div class="mt-12">
    <a href="/" class="inline-block px-16 py-2 font-bold text-white uppercase">
      <span class="inline-block mr-2 text-primary font-bold">+</span>Back home
    </a>
  </div>
</div>
