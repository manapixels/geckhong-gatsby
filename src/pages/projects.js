import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import "./projects.scss"

const ProjectsPage = () => {

	const data = useStaticQuery(
		graphql`
		  query {
			image9: file(relativePath: { eq: "Image 9.png" }) {
			  childImageSharp {
				fluid(maxWidth: 1733, maxHeight: 912, quality: 100) {
				  ...GatsbyImageSharpFluid
				}
			  }
			},
			image10: file(relativePath: { eq: "Image 10.png" }) {
				childImageSharp {
				  fluid(maxWidth: 1048, maxHeight: 513, quality: 100) {
					...GatsbyImageSharpFluid
				  }
				}
			},
			image11: file(relativePath: { eq: "Image 11.png" }) {
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

		<section className="projects-page">
			
			<div className="project-list">
				<div className="project-list-item">
					<div className="row">
						<div className="col-12 col-md-5">
							<Image
								className="image-container wipeIn ani-1"
								fluid={data['image9'].childImageSharp.fluid}
							/>
						</div>
						<div className="col-12 col-md-7">

							<div className="title">Peer Digital Acceset (PDA): Translating Online Peer Support for Adolescent Mental Well-being</div>

							<div className="subject-title">Objective</div>
							<div className="subject-description">To examine the implementation and clinical effectiveness of digital peer support, and the developmental change linking peer support and adolescents’ psychological well-being, during the COVID-19 pandemic.</div>

							<div className="subject-title">Grant Award</div>
							<div className="subject-description">2020 Small Grant for Early Career Scholars by the <a href="https://www.srcd.org/news/announcing-2021-recipients-small-grants-program-early-career-scholars" target="_blank">Society for Research in Child Development (SRCD) in the U.S.</a></div>

							<div className="subject-title">Participation{" "}<span className="badge ml-1">ACTIVE</span></div>
							<div className="subject-description">I am currently recruiting adolescents ages 13 to 16 for this study. Each participant will learn about their state of mental health during COVID-19, and ways to provide peer sharing and support in coping with the conditions of the pandemic. Participants will receive SGD40 reimbursement. Click the button below to find out more and to enroll in the study! Have fun!</div>

							<div className="subject-title">Collaborator</div>
							<div className="subject-description"><a href="https://www.acceset.com/" target="_blank">Acceset</a>, a social enterprise that provides text-based peer support for youth mental well-being.</div>
						</div>
					</div>
				</div>
				<div className="project-list-item">
					<div className="row">
						<div className="col-12 col-md-5">
							<Image
								className="image-container wipeIn ani-1"
								fluid={data['image10'].childImageSharp.fluid}
							/>
						</div>
						<div className="col-12 col-md-7">

							<div className="title">Digital Media Use and Psychological Functioning among Adolescents and College Students</div>

							<div className="subject-title">Objective</div>
							<div className="subject-description">To examine a contextually-rooted developmental perspective on adolescents’ digital media use (i.e., the role of parents, peers and schools).</div>

							<div className="subject-title">Grant Award</div>
							<div className="subject-description">Graduate School Student Research Grants Competition (SRGC) by University of Wisconsin-Madison</div>

							<div className="subject-title">Participation</div>
							<div className="subject-description">This longitudinal study was completed with the help and participation of close to 900 college students (i.e., tertiary institution students) in Singapore, and findings have been reported in three studies that are currently under review in peer-reviewed journals.</div>

							<div className="subject-title">Collaborator</div>
							<div className="subject-description">
								<ol>
									<li><a href="https://prsg.education.wisc.edu/" target="_blank">Professor B. Bradford Brown</a>, University of Wisconsin-Madison</li>
									<li><a href="https://experts.okstate.edu/chia-chen.yang" target="_blank">Assistant Professor Yang Chia-chen</a>, Oklahoma State University.</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
				<div className="project-list-item">
					<div className="row">
						<div className="col-12 col-md-5">
							<Image
								className="image-container wipeIn ani-1"
								fluid={data['image11'].childImageSharp.fluid}
							/>
						</div>
						<div className="col-12 col-md-7">
							<div>
								<div className="title">Parental Emotion Socialization across Cultures</div>

								<div className="subject-title">Objective</div>
								<div className="subject-description">To examine the cultural conceptualization of parental emotion socialization and its association with adolescents' socio-emotional functioning.</div>

								<div className="subject-title">Grant Award</div>
								<div className="subject-description">
									<ul>
										<li>National Youth Fund by <a href="https://www.nyc.gov.sg/en" target="_blank">National Youth Council</a></li>
										<li>Family Research Grant by <a href="https://www.msf.gov.sg/Pages/default.aspx" target="_blank">Ministry of Social and Family Development, Singapore</a></li>
									</ul>
								</div>

								<div className="subject-title">Participation</div>
								<div className="subject-description">
									<ul>
										<li>National Youth Fund by <a href="https://www.nyc.gov.sg/en" target="_blank">National Youth Council</a></li>
										<li>A series of qualitative and quantitative studies were conducted with approximately 500 to 700 parent-adolescent dyads across Asian societies including India, China and Singapore. Findings have been reported in a publication and in a study currently under review.</li>
									</ul>
								</div>
								<div className="subject-title">Collaborators</div>
								<div className="subject-description">
									<ol>
										<li>Evergreen Secondary School,</li>
										<li>The Singapore Boys Home</li>
										<li><a href="https://prsg.education.wisc.edu/" target="_blank">Professor B. Bradford Brown</a>, University of Wisconsin-Madison,</li>
										<li><a href="https://www.miamioh.edu/cas/academics/departments/psychology/about/faculty-staff/raval-vaishali/care-lab/index.html" target="_blank">Professor Vaishali V. Raval</a>, Miami University</li>
										<li><a href="https://ccadlab.umbc.edu/" target="_blank">Professor Charissa S. L., Cheah</a>, University of Maryland at Baltimore County</li>
										<li><a href="https://fass.nus.edu.sg/psy/people/sim-tick-ngee/">Associate Professor Sim Tick Ngee</a>, NUS</li>
										<li><a href="https://www.researchgate.net/profile/Hsun-Yu-Chan" target="_blank">Assistant Professor Chan Hsun-Yu</a>, National Taiwan Normal University</li>
									</ol>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}


export default ProjectsPage