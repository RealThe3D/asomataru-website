<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';
	import '@fontsource/montserrat';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<title>Asomataru</title>
	<meta name="description" content="Asomataru website by The3D." />
	<meta name="google-site-verification" content="ab4DR7xw7N4pxI0hFF41ko_Iw81BtYo967wKbsfpAgc" />
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />
{@render children?.()}
