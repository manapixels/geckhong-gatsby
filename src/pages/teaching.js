import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import "./index.scss"

const ResearchProjectsPage = () => {

	const data = useStaticQuery(
		graphql`
		  query {
			image9: file(relativePath: { eq: "Image 9.jpg" }) {
			  childImageSharp {
				fluid(maxWidth: 1733, maxHeight: 912, quality: 100) {
				  ...GatsbyImageSharpFluid
				}
			  }
			},
			image10: file(relativePath: { eq: "Image 10.jpg" }) {
				childImageSharp {
				  fluid(maxWidth: 1048, maxHeight: 513, quality: 100) {
					...GatsbyImageSharpFluid
				  }
				}
			},
			image11: file(relativePath: { eq: "Image 11.jpg" }) {
				childImageSharp {
				  fluid(maxWidth: 958, maxHeight: 626, quality: 100) {
					...GatsbyImageSharpFluid
				  }
				}
			},
		  }
		`
	  )

	return (

		<div>
				
			<section>
				<h1 className="abril-font text-center">Research Projects</h1>
				<Image
                    className="image-container wipeIn ani-1"
                    fluid={data['image10'].childImageSharp.fluid}
                />
			</section>
		</div>
	)
}

export default ResearchProjectsPage