import * as React from 'react'
import { NavLink } from 'react-navi'

export default function Roy() {



	return (
		<div>
			<h2>Hi Roy</h2>
			<p>This route was compiled and handled by Navi, including all the heavy lifting for SEO, creating sitemaps including this page, code-splitting, etc!</p>
			<nav><NavLink href="/">Back to the index</NavLink></nav>
		</div>
	)
}
