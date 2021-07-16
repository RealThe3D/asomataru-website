import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Commands from './Pages/Commands/Commands';

function App() {
	return (
		<>
			<Router>
				<Route exact path='/' component={Homepage} />
				<Route path='/commands' component={Commands} />
			</Router>
		</>
	);
}

export default App;
