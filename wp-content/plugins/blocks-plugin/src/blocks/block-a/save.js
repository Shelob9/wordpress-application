import Display from './display';
export default function save(props) {
	const { attributes: { message }, className } = props;
	return (
		<Display message={message} className={className}/>
	);
}
