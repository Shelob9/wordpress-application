import React from 'react';
export default function Display({ message,className }) {
	return (
		<div className={ className }>
			<h2>{ message }</h2>
		</div>
	);
}
