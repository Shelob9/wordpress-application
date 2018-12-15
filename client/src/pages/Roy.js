import * as React from 'react'
import { NavLink } from 'react-navi'
import useFetch, { useJsonResponse } from 'react-use-fetch';

export class Roy extends React.Component {

	state = {
		hi:'',
		error:false,
		loading: true,
		location: ''
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
		fetch( '/api/roy')
			.then(r=> r.json() )
			.then(response => this.setState({
				location:response.location,
				loading: false,
			}))
			.catch(e => this.setState({error:true,loading:false}))

	}
	render(){
		const {hi,location,loading,error} = this.state;
		if( loading ){
			return <div>Loading...</div>
		}
		if( error ){
			return <div>An Error Happened</div>
		}
		return (
			<div>
				<h2>Hi Roy</h2>
				<p>Location according to Github {location}</p>
				<p>Api says Hi {hi}</p>
				<nav><NavLink href="/">Back to the index</NavLink></nav>
			</div>
		)
	}


}
