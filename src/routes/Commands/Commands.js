import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CommandContainer, CommandDescription, CommandTitle } from './styles';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Navbar from '../../components/Navbar/Navbar';

function Commands() {
	const [commands, setCommands] = useState({
		noCategory: true,
	});

	return (
		<>
			<Navbar>
				<Link to="/">Home</Link>
				<Link to="/commands">Commands</Link>
				<a
					rel="noopener"
					target="_blank"
					href="https://top.gg/bot/730622099525206086"
				>
					Invite
				</a>
			</Navbar>

			<Container>
				<Button
					blurple
					onClick={() => {
						setCommands({ general: true });
					}}
				>
					General
				</Button>
				<Button
					blurple
					onClick={() => {
						setCommands({ fun: true });
					}}
				>
					Fun
				</Button>
				<Button
					blurple
					onClick={() => {
						setCommands({ moderation: true });
					}}
				>
					Moderation
				</Button>
				<Button
					blurple
					onClick={() => {
						setCommands({ utils: true });
					}}
				>
					Utils
				</Button>
				<Button
					blurple
					onClick={() => {
						setCommands({ rpg: true });
					}}
				>
					RPG
				</Button>
			</Container>
			{commands.general && (
				<>
					<Container>
						<CommandContainer>
							<CommandTitle>Anime</CommandTitle>
							<CommandDescription>
								Sends an anime picture into chat!
							</CommandDescription>
						</CommandContainer>
					</Container>
					<Container>
						<CommandContainer>
							<CommandTitle>Avatar</CommandTitle>
							<CommandDescription>
								Gets the image or GIF (for nitro users) of a Discord account!
							</CommandDescription>
						</CommandContainer>
					</Container>
					<Container>
						<CommandContainer>
							<CommandTitle>Birthday</CommandTitle>
							<CommandDescription>Shows upcoming birthdays!</CommandDescription>
						</CommandContainer>
					</Container>
					<Container>
						<CommandContainer>
							<CommandTitle>Coinflip</CommandTitle>
							<CommandDescription>
								Flip a coin and hope it lands on Heads!
							</CommandDescription>
						</CommandContainer>
					</Container>
					<Container>
						<CommandContainer>
							<CommandTitle>Credits</CommandTitle>
							<CommandDescription>
								A dedication to my friends who've supported me!
							</CommandDescription>
						</CommandContainer>
					</Container>
					<Container>
						<CommandContainer>
							<CommandTitle>Topic</CommandTitle>
							<CommandDescription>
								Sends a topic into the chat to talk about.
							</CommandDescription>
						</CommandContainer>
					</Container>
					<Container>
						<CommandContainer>
							<CommandTitle>Uselessfact</CommandTitle>
							<CommandDescription>
								Sends a useless fact in chat!
							</CommandDescription>
						</CommandContainer>
					</Container>
				</>
			)}
			{commands.fun && (
				<>
					<Container>
						<CommandContainer>
							<CommandTitle>Baka</CommandTitle>
							<CommandDescription>
								Call someone a baka, but that's kinda mean!
							</CommandDescription>
						</CommandContainer>
					</Container>
					<Container>
						<CommandContainer>
							<CommandTitle>Cat</CommandTitle>
							<CommandDescription>
								Send a cute cat picture, meow!!
							</CommandDescription>
						</CommandContainer>
					</Container>
					<Container>
						<CommandContainer>
							<CommandTitle>Dog</CommandTitle>
							<CommandDescription>
								Send a wholesome dog picture, roof!!
							</CommandDescription>
						</CommandContainer>
					</Container>
					<Container>
						<CommandContainer>
							<CommandTitle>Joke</CommandTitle>
							<CommandDescription>Tell a joke in chat!</CommandDescription>
						</CommandContainer>
					</Container>
					<Container>
						<CommandContainer>
							<CommandTitle>Kiss</CommandTitle>
							<CommandDescription>Kiss someone! mwuah :)</CommandDescription>
						</CommandContainer>
					</Container>
					<Container>
						<CommandContainer>
							<CommandTitle>Moe</CommandTitle>
							<CommandDescription>
								Send a moemorphism in chat!
							</CommandDescription>
						</CommandContainer>
					</Container>
					<Container>
						<CommandContainer>
							<CommandTitle>Neko</CommandTitle>
							<CommandDescription>
								Send a neko in chat, meowo!!
							</CommandDescription>
						</CommandContainer>
					</Container>
				</>
			)}
			{commands.moderation && (
				<>
					<Container>
						<CommandContainer>
							<CommandTitle>Ban</CommandTitle>
							<CommandDescription>
								Swing the banhammer on a user!
							</CommandDescription>
						</CommandContainer>
					</Container>
					<Container>
						<CommandContainer>
							<CommandTitle>Kick</CommandTitle>
							<CommandDescription>
								Kick a user to the abyss where they belong!
							</CommandDescription>
						</CommandContainer>
					</Container>
				</>
			)}
			{commands.utils && (
				<>
					<Container>
						<CommandContainer>
							<CommandTitle>Help</CommandTitle>
							<CommandDescription>
								Get help on how to use Asomataru!
							</CommandDescription>
						</CommandContainer>
					</Container>
					<Container>
						<CommandContainer>
							<CommandTitle>Invite</CommandTitle>
							<CommandDescription>
								Get an invite to the support server!
							</CommandDescription>
						</CommandContainer>
					</Container>
					<Container>
						<CommandContainer>
							<CommandTitle>Ping</CommandTitle>
							<CommandDescription>
								Pings the bot to see it's latency!
							</CommandDescription>
						</CommandContainer>
					</Container>
					<Container>
						<CommandContainer>
							<CommandTitle>Prefix</CommandTitle>
							<CommandDescription>
								Change Asomataru's prefix in your server!
							</CommandDescription>
						</CommandContainer>
					</Container>
				</>
			)}
			{commands.noCategory && (
				<Container>
					<CommandContainer>
						<CommandTitle>Please select a category!</CommandTitle>
					</CommandContainer>
				</Container>
			)}
		</>
	);
}

export default Commands;
