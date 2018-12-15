import React from 'react';
function createMarkup(markup) { return {__html: markup}; };
export class WpPage extends React.Component {
	state= {
		page: {},
		loading: true,
	};

	componentDidMount(){
		const {
			pageSlug,
			apiRoot
		} = this.props;
		fetch( `${apiRoot}/${pageSlug}` )
			.then(r => r.json() )
			.then( r => this.setState({page:r,loading:false}));
	}

	render(){


		const {
			page,
			loading
		} = this.state;

		if( loading ){
			return <div>Loading...</div>
		}

		const {title,content} = page;

		return (
			<article>
				<h2 dangerouslySetInnerHTML={createMarkup(title.rendered)}/>
				<div dangerouslySetInnerHTML={createMarkup(content.rendered)}/>
			</article>
		)
	}

}
