import React from 'react';
import Display from './Display';
import Edit from './Display';
export default function Ui({message, className,onChangeMessage,isSelected}){
	if( isSelected){
		return <Edit className={className} message={message} onChangeMessage={onChangeMessage} />
	}
	return (
		<Display className={className} message={message} />
	);
}
