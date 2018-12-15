import React, { Component } from 'react';
import {NavProvider, NavRoute, NavNotFoundBoundary, NavLink} from 'react-navi';
import logo from './logo.svg';
import './App.css';

const Menu = () => (
	<nav>
		<ul>
			<li>
				<NavLink href="/">Home</NavLink>
			</li>
			<li>
				<NavLink href="/about">About </NavLink>
			</li>
			<li>
				<NavLink href="/roy">Roy Page</NavLink>
			</li>
		</ul>
	</nav>

);
class App extends Component {
	render() {
		return (
			<NavProvider navigation={this.props.navigation}>
				<div className="App">
					<img src={logo} className="App-logo" alt="logo" />
					<Menu/>
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
