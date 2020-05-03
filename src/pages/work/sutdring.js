import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Helmet from "react-helmet"

import WorkBottomNav from "../../components/WorkBottomNav"
import "./work.scss"


const SUTDRingProject = ({ location }) => {

    useEffect(() => {
        document.documentElement.scrollTop = 0
    }, [])

    const data = useStaticQuery(graphql`
		query {
            artboard: file(relativePath: { eq: "projects/sutdring/artboard.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1639, maxHeight: 1299, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
			bg: file(relativePath: { eq: "projects/sutdring/bg.png" }) {
				childImageSharp {
					fluid(maxWidth: 2000, maxHeight: 2091, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            case_design_draft: file(relativePath: { eq: "projects/sutdring/case_design_draft.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 605, maxHeight: 1500, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            case_design_final: file(relativePath: { eq: "projects/sutdring/case_design_final.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1420, maxHeight: 2309, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            final_product: file(relativePath: { eq: "projects/sutdring/final_product.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 457, maxHeight: 457, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            poster: file(relativePath: { eq: "projects/sutdring/poster.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000, maxHeight: 1000, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            sticker: file(relativePath: { eq: "projects/sutdring/sticker.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 234, maxHeight: 202, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },

		}
        `)


    return (
        <>
            <Helmet>
                <title>Work • SUTD Ring</title>
            </Helmet>
            <div className="work">
                <section className="header">
                    <div className="row">
                        <div className="col-12 col-md-6 order-2 order-md-1">
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
                        <div className="col-12 col-md-6 order-1 order-md-2">
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

                    <p>Inspired by the brass rings MIT students receive during graduation, they came up with the then <a href="http://www.straitstimes.com/singapore/singapore-university-of-technology-and-design-students-develop-fare-ring" target="_blank" rel="noopener noreferrer">Sesame Rings</a> &#45; functional rings that can be used to open lecture halls and classrooms within the SUTD campus. The ring is now known simply as the SUTD Ring within the student population. I designed the publicity materails and the ring case in the 4th production in 2016.</p>


                    <h1>Publicity</h1>

                    <p>We have two categories of audience. One is the Sophomores who'll receive the sponsored rings from the school, and the other is SUTD Staff who have to pay for their own. Anyone can place an order. Whether it is free or not, individuals still have to sign up to get one. The process isn't automatic. Thus we have set up a few channels to spread the information. We have two channels (1) emails and (2) poster. As anyone can attest to, at any point in time during a normal school term, the notification boards and walls are flooded with posters. Our poster must stand out to capture attention.</p>

                    <p>I opted for a non-conventional square poster as opposed to the conventionl A4 size print to achieve the novelty feel. To make it simple to read, the poster is designed with a hierarchy, a top-down reading format: "Sophomores" was placed first to address our target group, an image of the SUTD Ring was placed next to set the context, and the order information placed last to get them to act immediately. There is also a visual aid in the form of a converging triangle to direct attention from the top to the bottom.</p>

                    <Image
                        className="image"
                        fluid={data.poster.childImageSharp.fluid}
                        alt="SUTD Ring Poster" />
                    <div className="caption">Publicity poster</div>


                    <h1>Ring Case Design</h1>

                    <p>The ring case was designed in parallel to production. It's mainly a design and sending to printing scenario; I didn't get to see the end product until it was done; the finishing didn't end up as good as I had expected.</p>

                    <p>The concept for the case design was based on origami and low poly designs. These two elements were fused to represent "intricacy", "hands-on" and "precision", characteristics that the SUTD community possess. When I was brainstorming the design, I considered giving every student a huge selection of colours to choose from:</p>

                    <Image
                        className="image"
                        fluid={data.case_design_draft.childImageSharp.fluid}
                        alt="SUTD Ring Case Design Draft" />
                    <div className="caption">Case Design - Draft</div>

                    <p>We narrowed it down to just two choices - Black or White due to resource contraints. Black rings get housed in black cases, white rings in white cases.</p>

                    <Image
                        className="image"
                        fluid={data.case_design_final.childImageSharp.fluid}
                        alt="SUTD Ring Case Design Final" />
                    <div className="caption">Case Design - Final</div>

                    <h1>Final product</h1>

                    <Image
                        className="image"
                        fluid={data.final_product.childImageSharp.fluid}
                        alt="Completed rings" />
                    <div className="caption">Completed rings</div>


                    <h1>Artboard</h1>

                    <a className="bigimages" href={data.artboard.childImageSharp.fluid && data.artboard.childImageSharp.fluid.src} target="_blank" role="button">
                        <Image
                            className="image"
                            fluid={data.artboard.childImageSharp.fluid}
                            alt="SUTD Ring Artboard" />
                    </a>
                    <div className="caption">SUTD Ring Artboard</div>

                </section>

                <WorkBottomNav path={location.pathname} />

            </div>
        </>
    )
}

export default SUTDRingProject