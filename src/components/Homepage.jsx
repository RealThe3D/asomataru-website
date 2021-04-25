import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import asomatarukiss from '../images/asomatarukiss.png';
// import '../App.css';

class Homepage extends Component {
	render() {
		return (
			<div>
				<div id="navbar">
					<ul id="navbar-list">
						<li className="navbar-content">
							<Link to="/">Home</Link>
						</li>
						<li className="navbar-content">
							<Link to="/commands">Commands</Link>
						</li>
					</ul>
				</div>
				<div id="homepage">
					<h1>Asomataru.</h1>
					<h2>The bot that does it all.</h2>
					<div className="div-content">
						<img
							src={asomatarukiss}
							style={{ textAlign: 'center' }}
						/>
					</div>
					<div
						className="div-content-info"
						style={{ backgroundColor: '#bb86fc' }}
					>
						<p>
							Asomataru is a discord bot created back in July 2020
							by a 13 (now 14) year old.
							<br />
							Asomataru currently as of the v2.4.1 update has over
							30 commands for you to enjoy!
							<br />
						</p>
					</div>
					<div
						className="div-content-info"
						style={{ backgroundColor: '#03dac6' }}
					>
						<div>
							<p>Some commands include....</p>
							<ul style={{ display: 'inline-block' }}>
								<li>General Commands</li>
								<li>Fun commands</li>
								<li>Moderation Commands</li>
								<li>
									RPG Game Commands <em>(WIP)</em>
								</li>
								<li>Utilisation Commands</li>
							</ul>
						</div>
					</div>
					<div
						className="div-content-info"
						style={{ backgroundColor: '#3700b3' }}
					>
						<p>
							<span style={{ fontSize: 'large' }}>
								And so much more!
							</span>
							<br />
							so why not add Asomataru to your discord server
							today!
							<br />
							Just click the link below and it shall bring joy to
							your server!
							<br />
						</p>
					</div>
					<div
						className="div-content-info"
						style={{ backgroundColor: 'gray' }}
					>
						<a
							target="_blank"
							href="https://top.gg/bot/730622099525206086"
						>
							Link to Asomataru's Top.gg page.
						</a>
						<br />
						<a target="_blank" href="https://discord.gg/vRPgqtb">
							Link to Asomataru's support server!
						</a>
						<br />
						<p>Disclaimer: Top.gg is not affiliated with us.</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Homepage;
