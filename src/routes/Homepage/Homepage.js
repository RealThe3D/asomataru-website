import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Navbar from '../../components/Navbar/Navbar';
import Container from '../../components/Container/Container';
import { HomepageInfo, HomepageTitle } from './styles';

function Homepage() {
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
				<HomepageTitle>
					<Typewriter
						onInit={(typewriter) => {
							typewriter.typeString('Asomataru!').start();
						}}
					></Typewriter>
				</HomepageTitle>
			</Container>
			<Container>
				<HomepageTitle small>
					A very fun discord bot to use!
				</HomepageTitle>
			</Container>
			<Container>
				<HomepageInfo color="#4A148C">
					Asomataru is a discord bot created back in July 2020 by a 13
					(now 14) year old.
					<br />
					Asomataru currently as of the v2.5 update has over 30
					commands for you to enjoy!
					<br />
				</HomepageInfo>
			</Container>
			<Container>
				<HomepageInfo color="#006064">
					<p style={{ fontSize: '5vh', marginBottom: '20px' }}>
						Some commands include....
					</p>
					<ul
						style={{
							listStyleType: 'none',
						}}
					>
						<li>General Commands</li>
						<li>Fun Commands</li>
						<li>Moderation Commands</li>
						<li>
							RPG Game Commands <em>(WIP)</em>
						</li>
						<li>Utilisation Commands</li>
					</ul>
				</HomepageInfo>
			</Container>
			<Container>
				<HomepageInfo color="#134f8a" style={{ marginBottom: '20vh' }}>
					<p>
						<span style={{ fontSize: '2rem' }}>
							And so much more!
						</span>
						<br />
						so why not add Asomataru to your discord server today!
						<br />
					</p>
				</HomepageInfo>
			</Container>
		</>
	);
}

export default Homepage;
