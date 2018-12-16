export const name = 'hmr-demo/block-a';
const attributes = require( './attributes');
import edit from './edit';
import save from './save';
export const options = {
	title: 'Call To Action Block',
	description: 'Render a sample block.',
	icon: 'image-filter',
	category: 'widgets',
	attributes,
	edit,
	save
};
