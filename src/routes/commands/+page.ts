import commands from '$lib/commands.json';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		commands
	};
};
