import * as React from 'react'

export class Roy extends React.Component {

	state = {
		hi:'',
		error:false,
		loading: true,
		location: ''
	};
	componentDidMount(){
		fetch( '/api/roy')
			.then(r=> r.json() )
			.then(response => this.setState({
				location:response.location,
				loading: false,
			}))
			.catch(e => this.setState({error:true,loading:false}))

	}
	render(){
		const {location,loading,error} = this.state;
		if( loading ){
			return <div>Loading...</div>
		}
		if( error ){
			return <div>An Error Happened</div>
		}
		return (
			<div>
				<h2>Hi Roy</h2>
				<p>Roy's Location according to Github is: {location}</p>
			</div>
		)
	}


}
