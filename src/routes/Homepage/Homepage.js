import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import canyon from '../../assets/images/canyon.jpg';
import Navbar from '../../components/Navbar/Navbar';
import Container from '../../components/Container/Container';
import { HomepageTitle } from './styles';

class Homepage extends Component {
	render() {
		return (
			<>
				<Navbar>
					<Link to="/">Home</Link>
					<Link to="/commands">Commands</Link>
					<a
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
				<section>
					<div
						className="div-content-info"
						style={{ backgroundColor: '#4A148C' }}
					>
						<p>
							Asomataru is a discord bot created back in July 2020
							by a 13 (now 14) year old.
							<br />
							Asomataru currently as of the v2.5 update has over
							30 commands for you to enjoy!
							<br />
						</p>
					</div>

					<div
						className="div-content-info"
						style={{ backgroundColor: '#006064' }}
					>
						<p style={{ fontSize: '5vh', marginBottom: '20px' }}>
							Some commands include....
						</p>
						<ul
							id="command-list"
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
					</div>
					<div
						className="div-content-info"
						style={{ backgroundColor: '#1976D2' }}
					>
						<p>
							<span style={{ fontSize: '2rem' }}>
								And so much more!
							</span>
							<br />
							so why not add Asomataru to your discord server
							today!
							<br />
						</p>
					</div>
				</section>
			</>
		);
	}
}

export default Homepage;
