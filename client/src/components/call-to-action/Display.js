import React from 'react';

export default function Display({className,children}) {
	return (
		<div className={className}>
			<h2>{children}</h2>
		</div>
	);
}

