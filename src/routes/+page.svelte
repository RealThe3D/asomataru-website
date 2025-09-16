<script lang="ts">
	let { data } = $props();
</script>

<main class="flex flex-col items-center">
	<h1 class="text-5xl font-bold">Asomataru!</h1>
	<h2 class="mb-4 text-2xl font-bold">A very fun Discord bot to use!</h2>
	<div class="mx-auto w-1/2 rounded-lg bg-purple-700 p-6 text-center">
		<p>Asomataru is a Discord bot created in July 2020 by a 13 (now 19) year old.</p>
		<p>Asomataru is used in {data.serverCount || 0} servers!</p>
	</div>
	<div class="mt-6 flex w-1/2 flex-col rounded-lg bg-blue-700 p-6 text-center">
		<span class="text-2xl font-bold">Some commands include:</span>
		Fun Commands <br />
		General Commands
		<br />
		Moderation Commands
		<br />
		Utilization Commands
	</div>
	<div class="mx-auto mt-6 flex w-1/2 flex-col rounded-lg bg-green-700 p-6 text-center">
		<span class="text-4xl font-bold">And so much more!</span>
		So why not add Asomataru to your Discord server today!
	</div>
</main>
