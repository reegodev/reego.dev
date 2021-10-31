<script>
	import '../app.css';
	import Header from '../components/Header.svelte'
	import Footer from '../components/Footer.svelte'
</script>

<div class="flex flex-col justify-between min-h-screen">
	<Header />
	<main class="lg:flex lg:flex-grow lg:items-stretch">
		<slot />
	</main>
	<Footer />
</div>

