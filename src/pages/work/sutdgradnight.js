import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Helmet from "react-helmet"

import WorkBottomNav from "../../components/WorkBottomNav"
import "./work.scss"


const SUTDGradNightProject = ({ location }) => {

    useEffect(() => {
        document.documentElement.scrollTop = 0
    }, [])

    const data = useStaticQuery(graphql`
		query {
			artboard: file(relativePath: { eq: "projects/gradnight/artboard.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1639, maxHeight: 1643, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            bg: file(relativePath: { eq: "projects/gradnight/bg.png" }) {
				childImageSharp {
					fluid(maxWidth: 2000, maxHeight: 2091, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            invitation: file(relativePath: { eq: "projects/gradnight/invitation.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 800, maxHeight: 446, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            logo: file(relativePath: { eq: "projects/gradnight/logo.png" }) {
				childImageSharp {
					fluid(maxWidth: 800, maxHeight: 214, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            poster: file(relativePath: { eq: "projects/gradnight/poster.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 800, maxHeight: 660, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
		}
		`)

    return (
        <>
            <Helmet>
                <title>Work • SUTD Graduation Night 2016</title>
            </Helmet>
            <div className="work">
                <section className="header">
                    <div className="row">
                        <div className="col-12 col-md-6 order-2 order-md-1">
                            <div className="project-details">
                                <h1>SUTD Graduation Night</h1>
                                <div className="description">
                                    <ul>
                                        <li><p className="name">Period</p><p className="desc">May to Sep 16</p></li>
                                        <li><p className="name">Role</p><p className="desc">Co-director (Publicity),<br />Logo Design,<br />Website Design,<br />Award Nomination Art</p></li>
                                        <li><p className="name">Project Scope</p><p className="desc">Implement a series of publicity materials to boost participation for the graduation night gathering.</p></li>
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
                    <h1>About Grad Night &amp; Deliverables</h1>
                    <p>Initiated by the Alumni of Singapore University of Technology and Design (SUTD) and planned by a student committee, the SUTD Graduation Night is an annual celebratory night for graduating students. There were ~250 seniors from the graduating batch and the aim of our publicity team, consisting of 7 members, was to attract as many people as possible to the event. After discussion, we decided to produce the following materials:</p>
                    <ul>
                        <li>Event Logo Design</li>
                        <li>Poster Design</li>
                        <li>Invitation Card Design</li>
                        <li>Event Ticket Design</li>
                        <li>Award Nomination Graphics</li>
                        <li>Website Design</li>
                    </ul>
                    <h1>Brainstorm</h1>
                    <p>Many themes were brought up during discussion. One of the feedback from the previous year was the selection of the theme, "Into the wild", which didn't resonate as well with the graduating seniors as was intended. We wanted to come up with a theme that grabs their attention because its immediately relevant to them. One of the better ideas was a theme on the "1990's", referring the decade our seniors were born into. We were able to come up with decoration and the general feeling of the theme, but we decided to change it to "Here be dragons" to better suit the dark, medieval feel of the event location.</p>

                    <h1>Styling and Plan</h1>
                    <p>"Here be dragons" is a medieval theme. It refers to the old practice of drawing dragons and sea monsters on uncharted regions of maps to warn people of danger beyond known territories. We sourced for decorative, medieval-looking serif fonts and set a colour guide with brownish tones. To kickstart the publicity, we decided to release the posters with the invitation cards. This would be followed by video trailers, email notifications and the website. For backend work such as event booklet design and ticket design, we had a flexible timeline to work with.
                    </p>
                    <p>The logo we came up with is made up of three parts: the steering wheel of the ship, the anchor and an arrow pointing downwards. The arrow down symbol refers to the "here" of "here be dragons", the anchor refers to the "heaviness" of the responsibility our graduants have, and the steering wheel represents the control they have over the journey they choose.</p>

                    <Image
                        className="image"
                        fluid={data.logo.childImageSharp.fluid}
                        alt="SUTD Graduation Night 2016 Logo" />

                    <div className="caption">Logo in various colour scheme</div>
                    <p>We started the campaign by delivering ~250 invitation cards to every senior student in the graduating batch through the level representatives. People seldom receive cards anymore. A physical card would hopefully build up some form of fuzzy feeling, the kind one gets from being invited to an exclusive event. To add to the hand-crafted human touch, each of the name on the 250 cards was handwritten by Pauline and affixed with a wax seal on real wax (Yes, real wax!). The seal was custom made in China using the logo I designed previously. The clouds of smoke inhalation from wax burning was quite an experience. Not too awful, not pleasant either.</p>

                    <Image
                        className="image"
                        fluid={data.invitation.childImageSharp.fluid}
                        alt="SUTD Graduation Night Invitation Card" />
                    <div className="caption">Invitation Card, front and back</div>

                    <p>On the same day we distributed the invitation cards, we put up the poster over the school too. Illustrated by llustrated by <a href="https://www.linkedin.com/in/inez-ow-294293121/" target="_blank" rel="noopener noreferrer">Inez</a>, the poster started out with a sketch. We did colouring experimentations and decided on Inez's version as it fitted the event theme better: the feeling of rough seas was well conveyed. I wonder if it's because of the burned scrolls effect linked strongly to pirates and seas. Not to mention the lack of colours used by human dwellers on seas on paper. Our colour setups:</p>

                    <Image
                        className="image"
                        fluid={data.poster.childImageSharp.fluid}
                        alt="SUTD Graduation Night Poster" />
                    <div className="caption">Draft poster designs and final design (top centre). llustrated by <a href="https://www.linkedin.com/in/inez-ow-294293121/" target="_blank" rel="noopener noreferrer">Inez</a></div>

                    <h1>Website</h1>
                    <p>We required a platform for (1) purchasing of tickets, (2) title nominations, (3) message dedication, (4) submission of photographs, and (5) to post official updates of the event. We came up with a vertical-scroll website with the aid of patterns and specially-created graphics to enhance the theme feel of the website. Jotform and Google Forms were used for ticket purchase and message dedication. Dropbox was used for submission of photographs. After submission. the photographs get pulled to Flickr using IFTTT, which then gets pulled to the site gallery using Flickr's API. <i>Website has been archived to Github Pages as domain (sutdgradnight.com) as expired.</i> <a className="btn-primary" href="http://zhenyangg.github.io/sutdgradnight/" alt="SUTD Gradnight 2016 website" target="_blank" role="button" rel="noopener noreferrer">Visit the website</a></p>
                    <h1>Afterthoughts</h1>
                    <p>Even though the colour palette and fonts used were pretty much uniform in all the materials we produced, they didn't looked as uniform as I hoped. For example, our dragons in the (1) header background of the website and (2) the poster were created by different artists within the team and had different styles. The ships in (1) the poster and (2) the event ticket had different styles to them too. The graphics created for the nominations were more cartoon-like than the other graphics.</p>
                    <h1>Artboard</h1>

                    <a className="bigimages" href={data.artboard.childImageSharp.fluid && data.artboard.childImageSharp.fluid.src} target="_blank" role="button">
                        <Image
                            className="image"
                            fluid={data.artboard.childImageSharp.fluid}
                            alt="SUTD Graduation Night" />
                    </a>
                    <div className="caption">SUTD Graduation Night Artboard</div>

                </section>

                <WorkBottomNav path={location.pathname} />

            </div>
        </>
    )
}

export default SUTDGradNightProject