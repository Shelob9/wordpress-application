import React, { Component } from 'react';
import { NavProvider, NavRoute, NavNotFoundBoundary } from 'react-navi';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<NavProvider navigation={this.props.navigation}>
				<div className="App">
					<img src={logo} className="App-logo" alt="logo" />
					<NavNotFoundBoundary render={renderNotFound}>
						<NavRoute />
					</NavNotFoundBoundary>
				</div>
			</NavProvider>
		);
	}
}

const renderNotFound = () => (
	<div className="App-error">
		<h1>404 - Page not found.</h1>
	</div>
)

export default App;
