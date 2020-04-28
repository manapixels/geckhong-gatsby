import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const SUTDRingProject = () => {

    const data = useStaticQuery(graphql`
		query {
			bg: file(relativePath: { eq: "projects/sutdring/bg.png" }) {
				childImageSharp {
					fluid(maxWidth: 2000, maxHeight: 2091, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
		}
        `)


    return (
        <div className="work">
            <section className="header">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="project-details">
                            <h1>SUTD Ring</h1>
                            <div className="description">
                                <ul>
                                    <li><p className="name">Period</p><p className="desc">Sep 15 - Mar 16</p></li>
                                    <li><p className="name">Role</p><p className="desc">Ring Case Design,<br />Preorder Event Poster<br />Distribution Event Poster<br />Stickers</p></li>
                                    <li><p className="name">Project Scope</p><p className="desc">3D-print RFID-enabled rings, package, and distribute them.</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <Image
                            className="image"
                            fluid={data.bg.childImageSharp.fluid}
                            alt="SUTD Graduation Night" />
                    </div>
                </div>
            </section>

            <section className="body">
                <h1>A brief introduction</h1>
                <p>The SUTD RingComm was a team of 8 members when I joined in late 2015. Set up by pioneer students Edward Tiong and Olivia Seow in 2015, the committee have since facilitated batches of production of the SUTD rings.</p>
                <p>Inspired by the brass rings MIT students receive during graduation, they came up with the then <a href="http://www.straitstimes.com/singapore/singapore-university-of-technology-and-design-students-develop-fare-ring" target="_blank" rel="noopener noreferrer">Sesame Rings</a> &#45; functional rings that can be used to open lecture halls and classrooms within the SUTD campus. The ring is now known simply as the SUTD Ring within the student population.</p>
                <h1>Publicity</h1>
                <p>I was the designer for the 4th production that was successfully completed in Mar 2016. The project started with publicity. Emails were sent to the Sophomores (class 2017) and staff for them to place their orders. We had posters put up within the campus to generate interest in our target groups. The poster design is more aesthetics-focused than usual as I aimed to capture the attention of viewers amidst the many posters put up within the school.</p>
                <p>I opted for a non-conventional square poster as opposed to the conventionl A4 size print to achieve the novelty feel. To make it simple to read, the poster has a top-down reading format: "Sophomores" was placed first to address our target group, an image of the SUTD Ring was placed next to set the context, and the order information placed last to get them to act immediately. There is also a visual aid in the form of a converging triangle to direct attention from the top to the bottom.</p>
                <h1>Ring Case Design</h1>
                <p>The rings were 3D-printed in-house in SUTD by our RingComm's engineering team. Running parallel was the brainstorm for the new ring case design. In the perfect scenario, we would have given all students their choice case design colour. To meet our schedule, we chose to narrow the choices to two - Black or White. The concept for the case design was based on origami and low poly designs. These two elements were fused to represent "intricacy", "hands-on" and "precision", characteristics that the SUTD community possess.</p>
                <a className="bigimages" href="images/projects/sutdring/artworkdisplay.jpg" target="_blank" role="button"><img src="images/load.svg" data-src="images/projects/sutdring/artworkdisplay.jpg" className="lazy" /></a>
            </section>
        </div>
    )
}

export default SUTDRingProject