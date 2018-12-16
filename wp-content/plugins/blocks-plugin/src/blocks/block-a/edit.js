import React from 'react';
import Display from './display';
export default function edit(props) {
	const { attributes: { message }, className, setAttributes, isSelected } = props;
	if( ! isSelected ){
		return <Display message={message} className={className} />
	}
	const onChangeMessage = message => { setAttributes( { message } ) };
	return (
		<div className={ className }>
			<h2>
				<input
					type={'text'}
					onChange={ (event) => onChangeMessage(event.target.value) }
					value={ message }
				/>
			</h2>
		</div>
	);
}
