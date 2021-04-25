import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Commands from './components/Commands';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/">
						<Homepage />
					</Route>
					<Route path="/commands">
						<Commands />
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
