import * as React from 'react'
import { NavLink } from 'react-navi'
import useFetch, { useJsonResponse } from 'react-use-fetch';

export class Roy extends React.Component {

	state = {
		hi:'',
		error:false,
		loading: true,
	};
	componentDidMount(){
		fetch( '/api/hello')
			.then(r=> r.json() )
			.then(response => this.setState({
				error:true,
				loading:false,
				hi:response.hi
			}))
			.catch(e => this.setState({error:true,loading:false}))

	}
	render(){
		const {hi} = this.state;
		return (
			<div>
				<h2>Hi Roy</h2>
				<p>Api says: {hi}</p>
				<nav><NavLink href="/">Back to the index</NavLink></nav>
			</div>
		)
	}


}
