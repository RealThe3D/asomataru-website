<script lang="ts">
	import { commandStore } from '$lib/stores/commandStore.js';
	let { data } = $props();
</script>

<div class="flex flex-col items-center justify-center space-y-2">
	<div class="grid grid-cols-2 gap-2 font-bold md:grid-cols-4">
		{#each data.commands as category, index}
			<button
				class="w-32 rounded-lg border-4 border-blue-600 bg-blue-600 p-3 transition-all ease-linear hover:bg-[#121212]"
				onclick={() => commandStore.set(index)}>{category.name}</button
			>
		{/each}
	</div>
	{#if $commandStore == -1}
		<span class="rounded-md bg-gray-800 p-4 text-2xl font-bold">Please select a category!</span>
	{:else}
		{#each data.commands[$commandStore].commands as command}
			<div
				class="w-3/4 flex-none items-center justify-normal rounded-md bg-gray-800 px-6 py-4 text-lg font-bold text-white md:flex md:justify-between"
			>
				<h1>{command.commandName}</h1>
				<p class="text-gray-400 opacity-65">{command.description}</p>
			</div>
		{/each}
	{/if}
</div>
