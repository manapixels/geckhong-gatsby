import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import AboutSection from "./sections/about"
import "./index.scss"

const IndexPage = () => {

	const data = useStaticQuery(
		graphql`
		  query {
			image1: file(relativePath: { eq: "Image 1.jpg" }) {
			  childImageSharp {
				fluid(maxWidth: 960, maxHeight: 716, quality: 100) {
				  ...GatsbyImageSharpFluid
				}
			  }
			},
			image2: file(relativePath: { eq: "Image 2.jpg" }) {
				childImageSharp {
				  fluid(maxWidth: 640, maxHeight: 480, quality: 100) {
					...GatsbyImageSharpFluid
				  }
				}
			},
			image3: file(relativePath: { eq: "Image 3.jpg" }) {
				childImageSharp {
				  fluid(maxWidth: 414, maxHeight: 309, quality: 100) {
					...GatsbyImageSharpFluid
				  }
				}
			},
			image4: file(relativePath: { eq: "Image 4.jpg" }) {
				childImageSharp {
				  fluid(maxWidth: 960, maxHeight: 716, quality: 100) {
					...GatsbyImageSharpFluid
				  }
				}
			},
			image5: file(relativePath: { eq: "Image 5.jpg" }) {
				childImageSharp {
				  fluid(maxWidth: 960, maxHeight: 716, quality: 100) {
					...GatsbyImageSharpFluid
				  }
				}
			},
			image6: file(relativePath: { eq: "Image 6.jpg" }) {
				childImageSharp {
				  fluid(maxWidth: 960, maxHeight: 716, quality: 100) {
					...GatsbyImageSharpFluid
				  }
				}
			},
			image8: file(relativePath: { eq: "Image 8.jpg" }) {
				childImageSharp {
				  fluid(maxWidth: 1600, maxHeight: 898, quality: 100) {
					...GatsbyImageSharpFluid
				  }
				}
			},
		  }
		`
	  )

	return (

		<div>
				
			<section className="research-and-i">
				<h1 className="abril-font text-center">Research &amp; I</h1>
				<div className="subtitle text-center mb-2">My goal is to translate research findings into practical practices and policies.</div>
				<div className="row">
					<div className="col-12 col-md-6">
						<p>Informed by a contextually-rooted developmental model, my research emphasizes the role of contextual factors (e.g., family, peers, school, digital platforms) and the mechanism of change in psychological adjustment among adolescents.</p>
						
						<p>By attending to multiple layers of social context, my research offers numerous points of possible intervention. The translational nature of my research program involves community collaborations that impact positively adolescents’ psychological well-being.</p>
					</div>
					<div className="col-12 col-md-6">
						<p>My research has been funded by the Society for Research in Child Development in the U.S., and the National Youth Council, and the Ministry of Social and Family Development in Singapore. I have published in academic journals, including International Journal of Psychology and Journal of Child and Family Studies. I regularly speak at conferences and trainings at the Society for Research on Adolescence Biennial Meeting and the Society for Research in Child Development Biennial Meeting.</p>
					</div>
				</div>
			</section>

			<section className="personal-side">
				<h1 className="abril-font text-center">A Personal Side of Me: I'm a</h1>
				<div className="personal-side-item">
					<div className="letter">R</div>
					<div className="text-content">
						<div className="title">Runner</div>
						<div className="description">I fell in love with long distance running a decade ago. When I travel, I make sure to run on foreign terrains. The discipline in turning up for my run every day regardless of how I feel is what I truly enjoy. The sweat and accomplishment associated with running reminds me of my goal. To many more years of running! </div>
					</div>
					<div className="photo-content">
						<div className="row no-gutters">
							<div className="col-6 col-md-6">
								<Image
									className="image-container wipeIn ani-1"
									fluid={data['image1'].childImageSharp.fluid}
								/>
							</div>
							<div className="col-6 col-md-6">
								<Image
									className="image-container wipeIn ani-1"
									fluid={data['image2'].childImageSharp.fluid}
								/>
							</div>
							<div className="col-6 col-md-6">
								<Image
									className="image-container wipeIn ani-1"
									fluid={data['image3'].childImageSharp.fluid}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="personal-side-item">
					<div className="letter">E</div>
					<div className="text-content">
						<div className="title">Explorer</div>
						<div className="description">I am an explorer of Airbnb experiences, particularly hanging out and interacting with the hosts! I met amazing individuals with life stories so diverse that I marveled at how we all live in the same universe, yet had such different experiences. We were strangers who turned friends.</div>
					</div>
					<div className="photo-content">
						<div className="row no-gutters">
							<div className="col-6 col-md-6">
								<Image
									className="image-container wipeIn ani-1"
									fluid={data['image4'].childImageSharp.fluid}
								/>
							</div>
							<div className="col-6 col-md-6">
								<Image
									className="image-container wipeIn ani-1"
									fluid={data['image5'].childImageSharp.fluid}
								/>
							</div>
							<div className="col-6 col-md-6">
								<Image
									className="image-container wipeIn ani-1"
									fluid={data['image6'].childImageSharp.fluid}
								/>
							</div>
						</div>
					</div>
				</div>	
				<div className="personal-side-item">
					<div className="letter">D</div>
					<div className="text-content">
						<div className="title">Dancer</div>
						<div className="description">I first danced when I was doing my Phd at Wisconsin. I have tremendous fun exploring a different side of me when the music turns on. It was never something I thought I would enjoy, given that hand-leg and left-right coordination was a real challenge for me (initially). To choreograph a dance is a dream now!</div>
					</div>
					<div className="photo-content">
						<Image
							className="image-container wipeIn ani-1"
							fluid={data['image8'].childImageSharp.fluid}
						/>
					</div>
				</div>

			</section>
		</div>
	)
}

export default IndexPage