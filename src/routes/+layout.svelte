<script lang="ts">
	import '@fontsource/montserrat';
	import Navbar from '$lib/Navbar/Navbar.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<Navbar />
{@render children()}
