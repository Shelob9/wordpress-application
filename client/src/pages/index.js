// Import dependencies from navi and react
import {createPage, createSwitch} from 'navi'
import * as React from 'react'
import {NavLink} from 'react-navi'

// Create the switch
export default createSwitch({
	paths: {
		// Create the index route
		'/': createPage({
			title: "Navi",
			content:
				<div>
					<h2>My Navi React Project</h2>
					<p>This is the index route!</p>
					<nav><NavLink href='/about'>See the about page</NavLink></nav>
					<nav><NavLink href='/roy'>See the Roy route</NavLink></nav>
				</div>
		}),

		// Create the about route
		'/about': createPage({
			title: "About",
			getContent: () => import('./About')
		}),
		// Create the roy route
		'/roy': createPage({
			title: "Roy",
			getContent: () => import('./Roy')
		}),
	}
})
