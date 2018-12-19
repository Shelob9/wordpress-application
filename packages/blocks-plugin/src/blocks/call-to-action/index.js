export const name = 'hmr-demo/block-a';
const attributes = require( './attributes');
import React from 'react';

import {Ui,Save} from '../../components/call-to-action'


export const options = {
	title: 'Call To Action Block',
	description: 'Render a sample block.',
	icon: 'image-filter',
	category: 'widgets',
	attributes,
	edit({attributes,setAttributes,isSelected,className}){
		const {message} = attributes;
		const onChangeMessage = (message) => setAttributes({message});
		return <Ui message={message} className={className} onChangeMessage={onChangeMessage} />
	},
	save({attributes,className}){
		return <Save className={className} message={attributes.message}/>
	}
};
