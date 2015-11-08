import React from 'react'
import { fetchSponsors } from '../../actions'
import { Link } from 'react-router'

module.exports = React.createClass({

	getInitialState: function() {
		return {
			showingSponsor: null
		}
	},

	componentDidMount: function() {
		this.props.dispatch( fetchSponsors() )
	},

	handleClickSponsor: function( sponsor ) {
		if ( this.state.showingSponsor !== sponsor.id ) {
			this.setState( { showingSponsor: sponsor.id })
		} else {
			this.setState( { showingSponsor: null })
		}
	},

	render: function() {

		return (
			<div className="Sponsors">
				<h1>Meet Our Fabulous Sponsors</h1>

				<p style={{textAlign: 'center', margin: '40px'}}>
					<a className="sponsorship-packages" href="https://hmn-uploads.s3.amazonaws.com/humanmade-production/uploads/sites/27/2015/04/RESTDaySponsorPackages.pdf">Download the sponsorship packages</a>
				</p>

				<ul className="sponsor-tiers">
					<li>
						<h3>Gold Sponsors</h3>
						<ul className="sponsors">

							{this.props.posts.sponsors.map( sponsor => {
								return (
									<li>
										<div className="sponsor-logo"><img src={sponsor._embedded['http://v2.wp-api.org/attachment'][0].source_url} /></div>
										<div className="sponsor-desc">
											<h4>{sponsor.title.rendered}</h4>
											<div dangerouslySetInnerHTML={{__html:sponsor.content.rendered}} />
										</div>
									</li>
								)
							})}

							
						</ul>
					</li>
				</ul>

				<p>We’d love to see your company name here. <a href="https://hmn-uploads.s3.amazonaws.com/humanmade-production/uploads/sites/27/2015/04/RESTDaySponsorPackages.pdf">Download The Sponsorship packages</a> and <a href="mailto:events@humanmade.co.uk">Get in touch</a> to reserve your preferred sponsor option for A Day of REST.</p>
			</div>
		)
	}
})
