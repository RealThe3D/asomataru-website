<script lang="ts">
	import { writable } from 'svelte/store';

	const commands = writable(-1);
	let categories = [
		{
			name: 'General',
			commands: [
				{
					commandName: 'Anime',
					description: 'Sends an anime picture into chat!'
				},
				{
					commandName: 'Avatar',
					description: 'Gets the image or GIF (for nitro users) of a Discord account!'
				},
				{
					commandName: 'Birthday',
					description: 'Shows upcoming birthdays!'
				},
				{
					commandName: 'Coinflip',
					description: 'Flip a coin and hope it lands on Heads!'
				},
				{
					commandName: 'Credits',
					description: "A dedication to my friends who've supported me!"
				},
				{
					commandName: 'Topic',
					description: 'Sends a topic into the chat to talk about'
				},
				{
					commandName: 'Uselessfact',
					description: 'Sends a useless fact in chat!'
				}
			]
		},
		{
			name: 'Fun',
			commands: [
				{
					commandName: 'Baka',
					description: "Call someone a baka, but that's kinda mean!"
				},
				{ commandName: 'Cat', description: 'Send a cute cat picture, meow!!' },
				{ commandName: 'Dog', description: 'Send a wholesome dog picture, roof!!' },
				{ commandName: 'Joke', description: 'Tell a joke in chat!' },
				{ commandName: 'Kiss', description: 'Kiss someone! mwuah :)' },
				{ commandName: 'Moe', description: 'Send a moemorphism in chat!' },
				{ commandName: 'Neko', description: 'Send a neko in chat, meowo!!' }
			]
		},
		{
			name: 'Moderation',
			commands: [
				{
					commandName: 'Ban',
					description: 'Swing the banhammer on a user!'
				},
				{ commandName: 'Kick', description: 'Kick a user to the abyss where they belong!' }
			]
		},
		{
			name: 'Utils',
			commands: [
				{ commandName: 'Help', description: 'Get help on how to use Asomataru!' },
				{ commandName: 'Invite', description: 'Get an invite to the support server!' },
				{ commandName: 'Ping', description: 'Pings the bot to see its latency!' },
				{ commandName: 'Prefix', description: "Change Asomataru's prefix in your server!" }
			]
		}
	];

	let commandVal: number = $state(-1);
	commands.subscribe((n) => (commandVal = n));
</script>

<div class="flex flex-col items-center justify-center space-y-2">
	<div class="font-bold grid-cols-2 md:grid-cols-4 grid gap-2">
		{#each categories as category, index}
			<button
				class="bg-blue-600 p-3 rounded-lg w-32 hover:bg-[#121212] ease-linear transition-all border-4 border-blue-600"
				onclick={() => commands.set(index)}>{category.name}</button
			>
		{/each}
	</div>
	{#if commandVal == -1}
		<span class="font-bold text-2xl bg-gray-800 p-4 rounded-md">Please select a category!</span>
	{:else}
		{#each categories[commandVal].commands as command}
			<div
				class="bg-gray-800 font-bold text-lg flex-none md:flex justify-normal md:justify-between py-4 px-6 items-center w-3/4 rounded-md text-white"
			>
				<h1>{command.commandName}</h1>
				<p class="text-gray-400 opacity-65">{command.description}</p>
			</div>
		{/each}
	{/if}
</div>
