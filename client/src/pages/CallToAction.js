import * as React from 'react'
import {Edit,Save} from "../components/call-to-action";
import { withState } from '@wordpress/compose';

function CallToAction({ message, setState }) {
	const className = 'className';
	const onChangeMessage = (message) => setState( () => ( { message } ) );
	return (
		<div>
			<h2>Edit</h2>
			<Edit message={message} className={className} onChangeMessage={onChangeMessage}/>
			<h3>Save</h3>
			<Save message={message} className={className}/>
		</div>
	)
}



export default withState( {
	message: 'Hi Roy !',
} )( CallToAction );
