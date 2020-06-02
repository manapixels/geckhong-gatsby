import React, { useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Helmet from "react-helmet"

import WorkBottomNav from "../../components/WorkBottomNav"
import "./work.scss"

const SelfiProject = ({ location }) => {

    useEffect(() => {
        document.documentElement.scrollTop = 0
    }, [])

    const data = useStaticQuery(graphql`
		query {
			bg: file(relativePath: { eq: "projects/selfi/bg.png" }) {
				childImageSharp {
					fluid(maxWidth: 2000, maxHeight: 2091, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            selfi_colours: file(relativePath: { eq: "projects/selfi/selfi-colours.png" }) {
				childImageSharp {
					fluid(maxWidth: 1312, maxHeight: 450, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            selfi_logos: file(relativePath: { eq: "projects/selfi/selfi-logos.png" }) {
				childImageSharp {
					fluid(maxWidth: 1639, maxHeight: 887, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
		}
		`)

    return (
        <>
            <Helmet>
                <title>Work • Selfi</title>
            </Helmet>
            <div className="work">
                <section className="header">
                    <div className="row">
                        <div className="col-12 col-md-6 order-2 order-md-1">
                            <div className="project-details">
                                <h1 className="wipeIn ani-1">Selfi</h1>
                                <div className="description">
                                    <ul>
                                        <li>
                                            <p className="name wipeIn ani-2">Period</p>
                                            <p className="desc wipeIn ani-2">Ongoing since Jan 2020</p>
                                        </li>
                                        <li>
                                            <p className="name wipeIn ani-3">Role</p>
                                            <p className="desc wipeIn ani-3">Design, Branding, Front-end Dev</p>
                                        </li>
                                        <li>
                                            <p className="name wipeIn ani-4">Project Scope</p>
                                            <p className="desc wipeIn ani-4">Selfi is a self-discovery platform built for everyone, no matter age, race, culture or religion. Users answer personality questions and they get traits for each quiz completed.</p>
                                        </li>
                                    </ul>
                                </div>
                                <a className="btn-primary btn-hover-pulse" role="button" href="https://selfi.ai" target="_blank" rel="noopener noreferrer">Visit website</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 order-1 order-md-2">
                            <Image
                                className="image"
                                fluid={data.bg.childImageSharp.fluid}
                                alt="AskSimple" />
                        </div>
                    </div>
                </section>

                <section className="body">
                    <h1>An Ongoing Journey</h1>

                    <p>This post isn't exactly a design portfolio. Working in a startup, I had to take on multiple perspectives to make things work - front-end development, ux design, ui design, branding, illustrations, setting business goals etc. I'm condensing everything that happened so far (29 Apr 2020) in this post, and posting new updates as they come into the <Link to="/blog">blog page</Link> tagged with "Selfi". I'm using the blog actively as a way to record what I have done and learnt on a regular basis.</p>

                    <h1>The Birth of Selfi</h1>

                    <p>Back in late 2018 our team had an idea of creating a platform for companies to test job candidates' personality for role suitability. We decided to create a consumer-facing site for candidates to take the quiz, as well as a company-facing site for admins to manage the tests. And so, Selfi was born. Conceptualization of how it should look, feel and work was done from scratch. As our objective is to help companies and individuals understand themselves and people around them better through reflection, I came up with the name "Selfi" and it ended up sticking around from then on.</p>


                    <h1>What is Selfi</h1>

                    <p>The brand is associated with some lofty ideals of mine. I believe the greatest value Selfi can bring to everyone is simply to show people them who they are, the real self that either they have rejected, accepted or never experienced before. There are two stages: the first is the fun part of completing quizzes to gain traits that describe personality. The second is a guide that helps fill in knowledge gaps so we can all build better relationships, do the things we love, go beyond our comfort zones into uncharted territories. Part two is obviously more difficult because we are tackling deep-seated values and discomfort.</p>

                    <p>Selfi is a life-long digital companion in a digital era for self-discovery and improvement. It is also an ecosystem to help people find friends, romance, jobs through fit through recommendations. We live in a data era and there's so much possibilities personality data can unlock in our lives.</p>

                    <p>Selfi has two parts. One is Personal, which is intended for individuals for self-discovery. Another is Corporate, which is built for companies to understand job candidates, analyze culture and role fit, build better teams and harmony. These two parts complement one another. A healthy progress of Selfi would like this: individuals each have an account on Selfi Personal, have completed enough quizzes to get a comprehensive understand of personality. If companies want to hire these individuals, they can simply request selected personality data points from them and it's done. This is one use case. There are others that Selfi as a personality data platform can integrate to streamline personality data sharing.</p>


                    <h1>The UX Design of Selfi</h1>

                    <p>The foundation of a strong Selfi brand lies in differentiation. Product features is one important pillar, emotional attachment is another and network effect is another. In simple terms, users flock to Selfi because everyone else is using it - individuals and companies, they really love it for the value and the community they get from using it. Visibility and recognisability starts with a voice, a logo and some colours.</p>

                    <Image
                        className="image"
                        fluid={data.selfi_logos.childImageSharp.fluid}
                        alt="Selfi Logos" />

                    <ol>
                        <li>
                            <p><strong>A voice of a caring teacher</strong><br />Someone trustworthy enough, yet strict on improvements and weeding out bad habits.</p>
                        </li>
                        <li>
                            <p><strong>Casual and fun</strong><br />Building Selfi up with the voice of a caring teacher. Someone trustworthy enough, yet strict on improvements and weeding out bad habits.</p>
                        </li>
                        <li>
                            <p><strong>Content and speed of consumption</strong><br />The first thing is the experience of speed. each about 1 to 2 mins would be a vastly different experience, considering that current personality tests take an average of half to 1 hour long to complete. The world's attention span has changed and the interfaces we interact with should reflect changes as well. Much like how we use QR codes to conduct instant payments, as oppose to the slow manual counting of coins and notes in the past.</p>
                        </li>
                    </ol>

                    <h1>The User Interface Design of Selfi Personal</h1>

                    <p><strong>Colors: </strong>I have been more of a monotonous colour person until I started Selfi. Simple is always good, I thought. Soon, I realised that a UI design is going to need way more than the primary, secondary and fewer than 5 shades of grays I have set out in the brand guidelines. The colour palette grows with the functional needs of organizing information by hierarchy in Selfi. For example, the number of grays I have grew to 13, and they are used in different ways throughout the UI - hovers, shadows, text, background, just to name a few.</p>

                    <Image
                        className="image"
                        fluid={data.selfi_colours.childImageSharp.fluid}
                        alt="Selfi Colour Palette" />

                    <p><strong>Quiz List layout: </strong>One day, I thought, wouldn't it be great if Selfi is an App Store equivalent for personality tests? In reality, increasing the number of quizzes probably wouldn't increase accuracy by much beyond a certain number. The orderliness of apps when visualized by cards appeals to me, so I made every quiz a card. New problems arose.</p>


                    <p>Creating value is not enough for a business. Capturing some of that value back will allow us to transform scale up our offerings to bring more value to our users. With that in mind, we aim to integrate connectors to existing platforms, such as job listing and recruitment systems to leverage on the power of personality data held by users.</p>

                    <p></p>


                </section>
                
                <WorkBottomNav path={location.pathname} />
            </div>
        </>
    )
}

export default SelfiProject