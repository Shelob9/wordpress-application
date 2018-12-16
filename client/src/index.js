import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createBrowserNavigation } from 'navi'
import pages from './pages/index'
import App from './App'

async function main() {
	console.log(pages)
	let navigation = createBrowserNavigation({ pages });

	// Wait until async content is ready.
	await navigation.steady()

	ReactDOM.render(
		<App navigation={navigation} />,
		document.getElementById('root')
	);
}

// Start the app
main();
