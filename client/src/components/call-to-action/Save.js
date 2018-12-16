import React from 'react';
import Display from './Display';
export default function Save({message, className}){
	return (
		<Display className={className} >
			{message}
		</Display>
	);
}
