import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import SEO from "../components/seo"
import './index.scss'


const IndexPage = () => {

	const data = useStaticQuery(graphql`
	query {
		profile_photo: file(relativePath: { eq: "profile-photo.jpg" }) {
			childImageSharp {
				fixed(width: 300, height: 468) {
				  ...GatsbyImageSharpFixed
				}
			  }
		},
	  }
	`)

	return (

		<>
			<SEO title="Home" />
			<div className="index-page">

				<section className="landing-section flex-end detect-scroll-past">

					<div className="self-intro">
						<div className="p1">
							I'm currently a <span className="text-green">product designer</span> at <a href="https://selfi.ai" target="_blank" rel="noopener" className="selfi">Selfi</a>, a platform that brings people's personality data to good use. <div className="icon-arrow-down icon-arrow-bob-updown bounce"></div>
						</div>
						<div className="p2">
							I bridge the gap between design and development.
					</div>
					</div>
					<div className="profile-photo">
						<Image
							fixed={data.profile_photo.childImageSharp.fixed}
							alt="Profile photo" />
					</div>

				</section>
			</div>
		</>
	)
}

export default IndexPage