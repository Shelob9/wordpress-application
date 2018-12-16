import React from 'react';
import Display from './Display';
import {BaseControl} from '@wordpress/components';
export default function Edit({message, className,onChangeMessage}){
	return (
		<Display className={className} >
			<BaseControl
				id="call-to-action-message"
				label="Call To Action Message"
				help="Enter some text"
			>
				<input
					id={'call-to-action-message'}
					type={'text'}
					onChange={ (event) => onChangeMessage(event.target.value) }
					value={ message }
				/>
			</BaseControl>

		</Display>
	);
}
