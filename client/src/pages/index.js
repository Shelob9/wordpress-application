// Import dependencies from navi and react
import {createPage, createSwitch} from 'navi'
import * as React from 'react'
import {NavLink} from 'react-navi'
import {Roy} from "./Roy";
import {WpPage} from "./WpPage";
import CallToAction from "./CallToAction";




const paths = {

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

	'/about': createPage({
		title: "About",
		getContent: () => import('./About')
	}),
	'/call-to-action': createPage({
		title: "Call To Action",
		getContent: () => (
			<CallToAction/>
		)
	}),
	'/roy': createPage({
		title: "Roy",
		getContent: () => {
			return (
				<Roy/>
			)
		}
	}),
	'/pages/roy': createPage({
		title: "Roy",
		getContent: () => {
			return (
				<Roy/>
			)
		}
	}),
};


const _pages = require( '../pages');
if( Array.isArray(_pages) && _pages.length ){
	_pages.forEach(page => {
		const {slug,title} = page;
	if( slug ){
		paths['/pages/' + slug ] = createPage({
				title,
				getContent: () => {
				return (
			<WpPage pageSlug={slug} apiRoot={'/api/pages/'}/>
	)

	}
	});
	}

});
}







export default createSwitch({
	paths
})
