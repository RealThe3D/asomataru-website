import axios from 'axios';
import type { PageServerLoad } from './$types';
import { TOKEN } from '$env/static/private';

export const load: PageServerLoad = async () => {
	const { data } = await axios.get('https://discord.com/api/v10/users/@me/guilds', {
		headers: {
			Authorization: `Bot ${TOKEN}`
		}
	});

	return {
		serverCount: data.length
	};
};
