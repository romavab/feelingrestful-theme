import React from 'react'
import { findWhere } from 'underscore'
import { fetchPageBySlug } from '../../actions'
import Text from '../modules/Text'
import Image from '../modules/Image'
import Blockquote from '../modules/Blockquote'
import Header from '../modules/Header'
import Map from '../modules/Map'

module.exports = React.createClass({

	componentDidMount: function() {
		this.props.dispatch( fetchPageBySlug( this.props.routeParams.slug ) )
	},

	render: function() {
		var page = findWhere( this.props.pages, { slug: this.props.routeParams.slug } )

		if ( ! page ) {
			return <p>Loading</p>
		}

		return (
			<div className="Page">
				<h1>{page.title.rendered}</h1>
				{page.page_builder.modules.map( Module => {
					switch ( Module.type ) {
						case 'text':
							return <Text {...Module.data} />
						case 'blockquote':
							return <Blockquote {...Module.data} />
						case 'image':
							return <Image {...Module.data} />
						case 'header':
							return <Header {...Module.data} />
						case 'map':
							return <Map {...Module.data} />
					}
					return <div></div>
				})}
			</div>
		)
	}
})