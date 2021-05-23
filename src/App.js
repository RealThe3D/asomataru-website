import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './routes/Homepage/Homepage';
import Commands from './routes/Commands/Commands';

class App extends Component {
	render() {
		return (
			<>
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
			</>
		);
	}
}

export default App;
