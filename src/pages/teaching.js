import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import "./teaching.scss"

const TeachingPage = () => {

	const data = useStaticQuery(
		graphql`
		  query {
			image17: file(relativePath: { eq: "Image 17.jpg" }) {
			  childImageSharp {
				fluid(maxWidth: 1140, maxHeight: 300, quality: 100) {
				  ...GatsbyImageSharpFluid
				}
			  }
			},
			image19: file(relativePath: { eq: "Image 19.jpg" }) {
				childImageSharp {
				  fixed(width: 300, height: 199, quality: 100) {
					...GatsbyImageSharpFixed
				  }
				}
			  },
			image20: file(relativePath: { eq: "Image 20.jpg" }) {
				childImageSharp {
				  fixed(width: 259, height: 199, quality: 100) {
					...GatsbyImageSharpFixed
				  }
				}
			  },
		  }
		`
	  )

	return (

		<div className="teaching-page">
				
			<section>
				<h1 className="abril-font text-center">Teaching &amp; Mentoring</h1>
				<div className="i-believe">
					<div className="text">I believe I can make a difference to the lives of  children and adolescents by integrating  teaching, research, and practice.</div>
				</div>
				<div className="my-objectives row mt-5 mb-5">
					<div className="col-12 col-md-4">
						<div className="my-objectives-item">
							<div className="icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="37.997" height="37.997" viewBox="0 0 37.997 37.997">
									<g id="Group_56" data-name="Group 56" transform="translate(0)">
										<path id="Path_32" data-name="Path 32" d="M0,0H38V38H0Z" transform="translate(0)" fill="none"/>
										<circle id="Ellipse_13" data-name="Ellipse 13" cx="2.66" cy="2.66" r="2.66" transform="translate(6.558 26.119)" fill="none" stroke="#2d2d2d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
										<circle id="Ellipse_14" data-name="Ellipse 14" cx="3.04" cy="3.04" r="3.04" transform="translate(25.461 6.456)" fill="none" stroke="#2d2d2d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
										<line id="Line_15" data-name="Line 15" y1="13.354" x2="13.354" transform="translate(12.321 12.321)" fill="none" stroke="#2d2d2d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
									</g>
								</svg>
							</div>
							<div className="text">
								To connect one’s learning to real world challenges
							</div>
						</div>
					</div>
					<div className="col-12 col-md-4">
						<div className="my-objectives-item">
							<div className="icon">
								<svg id="Group_57" data-name="Group 57" xmlns="http://www.w3.org/2000/svg" width="37.997" height="37.997" viewBox="0 0 37.997 37.997">
								<path id="Path_33" data-name="Path 33" d="M0,0H38V38H0Z" fill="none"/>
								<path id="Path_34" data-name="Path 34" d="M3,16.964H4.594M17.344,3V4.552m12.75,12.412h1.594M7.144,7.034,8.259,8.12M27.544,7.034,26.428,8.12" transform="translate(1.655 1.655)" fill="none" stroke="#2d2d2d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
								<path id="Path_35" data-name="Path 35" d="M10.1,20.964a7.758,7.758,0,1,1,9.309,0,5.43,5.43,0,0,0-1.552,4.655,3.1,3.1,0,0,1-6.206,0A5.43,5.43,0,0,0,10.1,20.964" transform="translate(4.241 4.621)" fill="none" stroke="#2d2d2d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
								<line id="Line_16" data-name="Line 16" x2="7.137" transform="translate(15.43 26.915)" fill="none" stroke="#2d2d2d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
							</svg>

							</div>
							<div className="text">To learn critical real-world skills, such as analyzing information to solve societal challenges
							</div>
						</div>
					</div>
					<div className="col-12 col-md-4">
						<div className="my-objectives-item">
							<div className="icon">
								<svg id="Group_58" data-name="Group 58" xmlns="http://www.w3.org/2000/svg" width="37.997" height="37.997" viewBox="0 0 37.997 37.997">
									<path id="Path_36" data-name="Path 36" d="M0,0H38V38H0Z" fill="none"/>
									<path id="Path_37" data-name="Path 37" d="M4,28.748,19.832,12.916m0-7.916v7.916h7.916M13.5,11.333v7.916h7.916M7.166,17.666v7.916h7.916M7.166,17.666,13.5,11.333,19.832,5" transform="translate(2.333 2.916)" fill="none" stroke="#2d2d2d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
									<path id="Path_38" data-name="Path 38" d="M23.666,13.5a5.5,5.5,0,0,0,1.583-3.936,5.6,5.6,0,0,0-9.5-3.98M11,26.165l6.333-6.333L23.666,13.5" transform="translate(6.415 2.333)" fill="none" stroke="#2d2d2d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
								</svg>
							</div>
							<div className="text">To apply research theories and methods to create social change and to support the community they are living in</div>
						</div>
					</div>
				</div>
			
				<div className="real-world-application">
					<h1 className="abril-font text-center">Real World Application</h1>
					<p>
						I taught Introduction to Trauma Psychology at the NUS Department of Psychology. For a tutorial related to children and adolescents, I helped students connect their learning to real-world problems by presenting cases from the Singapore Boys’ Home. Students took on the role of psychologists, analyzed information from the cases, and applied research theories and findings on complex trauma to gain insights into the delinquents’ behaviors. In recognition of my sustained high performance in teaching, I was awarded the Graduate Students’ Teaching Award over three consecutive semesters and placed on the Honour Roll.
					</p>
				</div>
				<div className="experiential-learning">
					<h1 className="abril-font text-center">Experiential Learning</h1>
					<p>I led the Adolescent Psychology Laboratory at NUS, and guided students in experiential learning of the research process through weekly training sessions. Students learned to conduct fieldwork with local communities, such as the Singapore Boys’ Home and secondary schools.</p>
					<Image
						className="image-container wipeIn ani-1"
						fluid={data['image17'].childImageSharp.fluid}
					/>
				</div>
				<div className="diversity-and-inclusivity">
					<h1 className="abril-font text-center">Diversity &amp; Inclusivity</h1>
					<p>During my Ph.D. training, I continued to pursue my goal in combining teaching, research and practice in a different cultural context--specifically, in the United States.</p>
					<p>I co-directed an ethnically diverse team of undergraduates comprising Hispanics, Asian and European Americans on a research module on adolescents’ social media use.</p>
					<p>For my efforts at mentoring undergraduates from diverse cultural backgrounds, I received honorable mention for the Graduate Peer Mentor Award at U.W.-Madison.</p>
					<div className="text-center">
						<Image
							className="image-container wipeIn ani-1"
							fixed={data['image19'].childImageSharp.fixed}
						/>
						<Image
							className="image-container wipeIn ani-1"
							fixed={data['image20'].childImageSharp.fixed}
						/>
						
						<div className="image-caption">Mentoring-U.W. Madison</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default TeachingPage