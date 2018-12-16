export const name = 'hmr-demo/block-a';
const attributes = require( './attributes');
import {
	Ui,
	Save
} from '../../../../../../client/src/components/call-to-action';

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
	save({attribues,className}){
		return <Save className={className} message={attribues.message}/>
	}
};
