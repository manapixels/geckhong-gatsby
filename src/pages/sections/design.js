import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import './design.scss'
import FadeInSection from '../../components/FadeInSection'

const Projects = () => {

    // const event = new Event("pagechange")

    const data = useStaticQuery(
        graphql`
          query {
            selfiCorporateCover: file(relativePath: { eq: "projects/selfi-corporate/frontImage.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000, maxHeight: 1000, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
            },
            selfiPersonalCover: file(relativePath: { eq: "projects/selfi-personal/frontImage.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000, maxHeight: 1000, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
            },
            askSimpleCover: file(relativePath: { eq: "projects/asksimple/frontImage.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000, maxHeight: 1000, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
            },
            sutdGradNightCover: file(relativePath: { eq: "projects/gradnight/frontImage.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000, maxHeight: 1000, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
            },
            nimbusRunCover: file(relativePath: { eq: "projects/nimbusrun/frontImage.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000, maxHeight: 1000, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
            },
            sutdRingCover: file(relativePath: { eq: "projects/sutdring/frontImage.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000, maxHeight: 1000, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
            },
            threadParadiseCover: file(relativePath: { eq: "projects/threadparadise/frontImage.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000, maxHeight: 1000, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			},
            timeCover: file(relativePath: { eq: "projects/timeui/frontImage.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000, maxHeight: 1000, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
            }
            
          }
        `)

    const {
        selfiCorporateCover, selfiPersonalCover, askSimpleCover, nimbusRunCover, sutdRingCover, sutdGradNightCover, threadParadiseCover, timeCover
    } = data


    return (
        <div className="projects">

            <div className="section-title" style={{ marginTop: '8rem' }}><span>Projects</span></div>

            {/* ******
            **********
            Selfi Corporate
            **********
            ****** */}

            <FadeInSection className="project-item item">
                <article className="project-item-content">
                    <div className="numbering wipeIn ani-2">01</div>
                    <h2 className="title wipeIn ani-2">Selfi.ai</h2>
                    <div className="year wipeIn ani-3">July 2020 - May 2021</div>

                    <div className="project-item-image">
                        <Link to="/work/selfi-corporate">
                            <Image
                                className="image wipeIn ani-4"
                                fluid={selfiCorporateCover.childImageSharp.fluid}
                                alt="Selfi.ai" />
                            <div className="moving-line"></div>
                        </Link>
                        <div className="hovering-object right">
                            <div className="three-ellipse">
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                            </div>
                        </div>
                    </div>

                    <div className="description wipeIn ani-4">
                        <p>Selfi is a psychometric assessment platform built for HR executives and team leaders in organisations to assess characteristics, potentials and well-being of employees.<br /><br /><a href="https://www.selfi.ai" target="_blank" rel="noopener noreferrer" role="button">Visit Website</a></p>
                    </div>
                    <div className="row wipeIn ani-4">
                        <div className="col-6 col-md-5 mb-3">
                            <div className="mb-1"><strong>Role</strong></div>
                            Product Design, Front-end Dev, Project Planning, Pricing
                        </div>
                        <div className="col-6 col-md-7 mb-3">
                            <div className="mb-1"><strong>Tools</strong></div>
                            XD, Photoshop, Illustrator, React, Redux, AWS, Discord, Google Analytics &amp; GTM, Sentry
                        </div>
                    </div>
                    <div className="d-inline-block wipeIn ani-5">
                        <Link className="d-inline-block btn-square btn-hover-pulse" to="/work/selfi-corporate">
                            <div className="icon-arrow-right"></div>
                        </Link>
                    </div>
                </article>
                <div className="project-item-image">
                    <Link to="/work/selfi-corporate">
                        <Image
                            className="image wipeIn ani-1"
                            fluid={selfiCorporateCover.childImageSharp.fluid}
                            alt="Selfi.ai app" />
                        <div className="moving-line"></div>
                    </Link>
                    <div className="hovering-object right">
                        <div className="three-ellipse">
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                        </div>
                    </div>
                </div>
            </FadeInSection>


            {/* ******
            **********
            Selfi Personal
            **********
            ****** */}

            {/* <FadeInSection className="project-item item">
                <article className="project-item-content">
                    <div className="numbering wipeIn ani-2">02</div>
                    <h2 className="title wipeIn ani-2">Selfi Personal</h2>
                    <div className="year wipeIn ani-3">January to Jul 2020</div>

                    <div className="project-item-image">
                        <Link to="/work/selfi-personal">
                            <Image
                                className="image wipeIn ani-4"
                                fluid={selfiPersonalCover.childImageSharp.fluid}
                                alt="Selfi Personal app" />
                            <div className="moving-line"></div>
                        </Link>
                        <div className="hovering-object right">
                            <div className="three-ellipse">
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                            </div>
                        </div>
                    </div>

                    <div className="description wipeIn ani-4">
                        <p>Selfi is a self-discovery platform built for students, job-seekers and people curious to know more about themselves. Users answer personality questions and get traits for each quiz completed. Traits transformed with additional quizzes completed.<br /><br /><a href="https://www.selfipersonal.ai" target="_blank" rel="noopener noreferrer" role="button">Visit Website</a></p>
                    </div>
                    <div className="row wipeIn ani-4">
                        <div className="col-6 col-md-5 mb-3">
                            <div className="mb-1"><strong>Role</strong></div>
                            Design, Branding, Front-end Dev
                        </div>
                        <div className="col-6 col-md-7 mb-3">
                            <div className="mb-1"><strong>Tools</strong></div>
                            XD, Photoshop, Illustrator, Flutter, React, Redux, AWS
                        </div>
                    </div>
                    <div className="d-inline-block wipeIn ani-5">
                        <Link className="d-inline-block btn-square btn-hover-pulse" to="/work/selfi-personal">
                            <div className="icon-arrow-right"></div>
                        </Link>
                    </div>
                </article>
                <div className="project-item-image">
                    <Link to="/work/selfi-personal">
                        <Image
                            className="image wipeIn ani-1"
                            fluid={selfiPersonalCover.childImageSharp.fluid}
                            alt="Selfi Personal app" />
                        <div className="moving-line"></div>
                    </Link>
                    <div className="hovering-object right">
                        <div className="three-ellipse">
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                        </div>
                    </div>
                </div>
            </FadeInSection> */}


            {/* ******
            **********
            Thread Paradise
            **********
            ****** */}

            <FadeInSection className="project-item">
                <div className="project-item-image">
                    <Link to="/work/threadparadise">
                        <Image
                            className="image wipeIn ani-1"
                            fluid={threadParadiseCover.childImageSharp.fluid}
                            alt="Thread Paradise app" />
                    </Link>
                    <div className="hovering-object left">
                        <div className="diamond-cross">
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                        </div>
                    </div>
                </div>
                <article className="project-item-content">
                    <div className="numbering wipeIn ani-2">02</div>
                    <h2 className="title wipeIn ani-2">Thread Paradise</h2>
                    <div className="year wipeIn ani-3">January to April 2017</div>
                    <section className="skills wipeIn ani-4">
                        <span>School Project</span>
                        <span>Concept</span>
                        <span className="icon-person" title="4 team members">4</span>
                    </section>

                    <div className="project-item-image">
                        <Link to="/work/threadparadise">
                            <Image
                                className="image wipeIn ani-4"
                                fluid={threadParadiseCover.childImageSharp.fluid}
                                alt="Thread Paradise app" />
                        </Link>
                        <div className="hovering-object right">
                            <div className="diamond-cross">
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                            </div>
                        </div>
                    </div>

                    <div className="description wipeIn ani-5">
                        <p>Thread Paradise is an eCommerce shopping app concept that seeks to solve multiple issues related to size-fit based on the culture and behaviours of Singaporeans.</p>
                    </div>
                    <div className="row wipeIn ani-4">
                        <div className="col-6 col-md-5 mb-3">
                            <div className="mb-1"><strong>Role</strong></div>
                            Design
                        </div>
                        <div className="col-6 col-md-7 mb-3">
                            <div className="mb-1"><strong>Tools</strong></div>
                            XD
                        </div>
                    </div>
                    <div className="d-inline-block wipeIn ani-5">
                        <Link className="d-inline-block btn-square btn-hover-pulse" to="/work/threadparadise">
                            <div className="icon-arrow-right"></div>
                        </Link>
                    </div>
                </article>
            </FadeInSection>

            {/* ******
            **********
            Time UI
            **********
            ****** */}

            <FadeInSection className="project-item">
                <article className="project-item-content">
                    <div className="numbering wipeIn ani-2">03</div>
                    <h2 className="title wipeIn ani-2">Time UI</h2>
                    <div className="year wipeIn ani-3">January to April 2017</div>
                    <section className="skills wipeIn ani-4">
                        <span>School Project</span>
                        <span>Concept</span>
                        <span className="icon-person" title="4 team members">4</span>
                    </section>

                    <div className="project-item-image">
                        <Link to="/work/timeui">
                            <Image
                                className="image wipeIn ani-4"
                                fluid={timeCover.childImageSharp.fluid}
                                alt="Time UI Homescreen" />
                        </Link>
                        <div className="hovering-object right">
                            <div className="triangle">
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                            </div>
                        </div>
                    </div>

                    <div className="description wipeIn ani-5">
                        <p>The challenge: To redesign the user experience of using a mobile OS interface through appropriate signifiers, while reducing the click distance to access apps. Aside from bringing in familiar elements from iOS and Android, new functions using the concepts of time and voice are brought in to the mix.</p>
                    </div>
                    <div className="row wipeIn ani-4">
                        <div className="col-6 col-md-5 mb-3">
                            <div className="mb-1"><strong>Role</strong></div>
                            Design
                        </div>
                        <div className="col-6 col-md-7 mb-3">
                            <div className="mb-1"><strong>Tools</strong></div>
                            Proto.io, XD
                        </div>
                    </div>
                    <div className="d-inline-block wipeIn ani-5">
                        <Link className="d-inline-block btn-square btn-hover-pulse" to="/work/timeui">
                            <div className="icon-arrow-right"></div>
                        </Link>
                    </div>
                </article>
                <div className="project-item-image">
                    <Link to="/work/timeui">
                        <Image
                            className="image wipeIn ani-1"
                            fluid={timeCover.childImageSharp.fluid}
                            alt="Time UI Homescreen" />
                    </Link>
                    <div className="hovering-object right">
                        <div className="triangle">
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                        </div>
                    </div>
                </div>
            </FadeInSection>


            {/* ******
            **********
            ASKSIMPLE
            **********
            ****** */}

            <FadeInSection className="project-item item">
                <div className="project-item-image">
                    <Link to="/work/asksimple">
                        <Image
                            className="image wipeIn ani-1"
                            fluid={askSimpleCover.childImageSharp.fluid}
                            alt="AskSimple app" />
                    </Link>
                    <div className="hovering-object left">
                        <div className="circle">
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                        </div>
                    </div>
                </div>
                <article className="project-item-content">
                    <div className="numbering wipeIn ani-2">04</div>
                    <h2 className="title wipeIn ani-2">Ask Simple</h2>
                    <div className="year wipeIn ani-3">September 2016 to January 2017</div>
                    <section className="skills wipeIn ani-4">
                        <span>School Project</span>
                        <span>Concept</span>
                        <span className="icon-person" title="5 team members">5</span>
                    </section>

                    <div className="project-item-image">
                        <Link to="/work/asksimple">
                            <Image
                                className="image wipeIn ani-4"
                                fluid={askSimpleCover.childImageSharp.fluid}
                                alt="AskSimple app" />
                        </Link>
                        <div className="hovering-object right">
                            <div className="circle">
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                            </div>
                        </div>
                    </div>

                    <div className="description wipeIn ani-5">
                        <p>AskSimple is a tool that helps learners participate in class anonymously and supports them in getting the answers they need as fast as possible. This app was designed in a Human-Computer Interaction Design <a href="http://mll.csie.ntu.edu.tw/course/hci_f16/" target="_blank" rel="noopener noreferrer">course</a> in National Taiwan University.</p>
                    </div>
                    <div className="row wipeIn ani-4">
                        <div className="col-6 col-md-5 mb-3">
                            <div className="mb-1"><strong>Role</strong></div>
                            Design, Website Dev
                        </div>
                        <div className="col-6 col-md-7 mb-3">
                            <div className="mb-1"><strong>Tools</strong></div>
                            Proto.io
                        </div>
                    </div>
                    <div className="d-inline-block wipeIn ani-5">
                        <Link className="d-inline-block btn-square btn-hover-pulse" to="/work/asksimple">
                            <div className="icon-arrow-right"></div>
                        </Link>
                    </div>
                </article>
            </FadeInSection>


            {/* ******
            **********
            SUTD GRADUATION NIGHT
            **********
            ****** */}

            <FadeInSection className="project-item">
                <article className="project-item-content">
                    <div className="numbering wipeIn ani-2">05</div>
                    <h2 className="title wipeIn ani-2">SUTD Grad Night</h2>
                    <div className="year wipeIn ani-3">May to September 2016</div>
                    <section className="skills wipeIn ani-4">
                        <span>School Project</span>
                        <span>Deployed and used</span>
                        <span className="icon-person" title="8 team members">8</span>
                    </section>

                    <div className="project-item-image">
                        <Link to="/work/sutdgradnight">
                            <Image
                                className="image wipeIn ani-4"
                                fluid={sutdGradNightCover.childImageSharp.fluid}
                                alt="SUTD Graduation Night 2016" />
                        </Link>
                        <div className="hovering-object right">
                            <div className="flower">
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                            </div>
                        </div>
                    </div>

                    <div className="description wipeIn ani-5">
                        <p>SUTD Graduation Night is an annual event organised specially for graduating seniors. In this project, our team of 7 planned and distributed materials over 4 months to engage seniors through offline and online platforms.</p>
                    </div>
                    <div className="row wipeIn ani-4">
                        <div className="col-6 col-md-5 mb-3">
                            <div className="mb-1"><strong>Role</strong></div>
                            Design, Illustration, Publicity
                        </div>
                        <div className="col-6 col-md-7 mb-3">
                            <div className="mb-1"><strong>Tools</strong></div>
                            Illustrator, Photoshop, HTML, CSS, JS
                        </div>
                    </div>
                    <div className="d-inline-block wipeIn ani-5">
                        <Link className="d-inline-block btn-square btn-hover-pulse" to="/work/sutdgradnight">
                            <div className="icon-arrow-right"></div>
                        </Link>
                    </div>
                </article>
                <div className="project-item-image">
                    <Link to="/work/sutdgradnight">
                        <Image
                            className="image wipeIn ani-1"
                            fluid={sutdGradNightCover.childImageSharp.fluid}
                            alt="SUTD Graduation Night 2016" />
                    </Link>
                    <div className="hovering-object right">
                        <div className="flower">
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                        </div>
                    </div>
                </div>
            </FadeInSection>


            {/* ******
            **********
            NIMBUS RUN
            **********
            ****** */}

            <FadeInSection className="project-item">
                <div className="project-item-image">
                    <Link to="/work/nimbusrun">
                        <Image
                            className="image wipeIn ani-1"
                            fluid={nimbusRunCover.childImageSharp.fluid}
                            alt="Nimbus Run - Android game" />
                    </Link>
                    <div className="hovering-object left">
                        <div className="square">
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                        </div>
                    </div>
                </div>
                <article className="project-item-content">
                    <div className="numbering wipeIn ani-2">06</div>
                    <h2 className="title wipeIn ani-2">Nimbus Run</h2>
                    <div className="year wipeIn ani-3">January to April 2016</div>
                    <section className="skills wipeIn ani-4">
                        <span>School Project</span>
                        <span>Concept</span>
                        <span className="icon-person" title="4 team members">4</span>
                    </section>

                    <div className="project-item-image">
                        <Link to="/work/nimbusrun">
                            <Image
                                className="image wipeIn ani-4"
                                fluid={nimbusRunCover.childImageSharp.fluid}
                                alt="Nimbus Run - Android game" />
                        </Link>
                        <div className="hovering-object right">
                            <div className="square">
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                            </div>
                        </div>
                    </div>

                    <div className="description wipeIn ani-5">
                        <p>Nimbus Run is an Android-platform racing game inspired from Fun Run. Created by my group and I as part of our software construction <a href="https://istd.sutd.edu.sg/undergraduate/courses/50003-elements-of-software-construction">course</a>, the game logic was created from scratch in libgdx. We used KryoNet as our the network system, and Photoshop and Illustrator for character design and graphic assets.</p>
                    </div>
                    <div className="row wipeIn ani-4">
                        <div className="col-6 col-md-5 mb-3">
                            <div className="mb-1"><strong>Role</strong></div>
                            Character and game design
                        </div>
                        <div className="col-6 col-md-7 mb-3">
                            <div className="mb-1"><strong>Tools</strong></div>
                            libgdx, Android Studio, Kryonet, Photoshop, Illustrator
                        </div>
                    </div>
                    <div className="d-inline-block wipeIn ani-5">
                        <Link className="d-inline-block btn-square btn-hover-pulse" to="/work/nimbusrun">
                            <div className="icon-arrow-right"></div>
                        </Link>
                    </div>
                </article>
            </FadeInSection>


            {/* ******
            **********
            SUTD RING
            **********
            ****** */}

            <FadeInSection className="project-item">
                <article className="project-item-content">
                    <div className="numbering wipeIn ani-2">07</div>
                    <h2 className="title wipeIn ani-2">SUTD Ring</h2>
                    <div className="year wipeIn ani-3">September 2015 to March 2016</div>
                    <section className="skills wipeIn ani-4">
                        <span>School Project</span>
                        <span>Deployed and used</span>
                        <span className="icon-person" title="7 team members">7</span>
                    </section>

                    <div className="project-item-image wipeIn ani-1">
                        <Link to="/work/sutdring">
                            <Image
                                className="image wipeIn ani-4"
                                fluid={sutdRingCover.childImageSharp.fluid}
                                alt="SUTD Ring 4th Production" />
                        </Link>
                        <div className="hovering-object right">
                            <div className="cross">
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                            </div>
                        </div>
                    </div>

                    <div className="description wipeIn ani-5">
                        <p>Started by two SUTD pioneer students, the SUTD RingComm produces the 'SUTD Ring' for each batch of undergraduates on a yearly basis. I was the designer for the ring case, as well as publicity materials for the batch of 2017 students.</p>
                    </div>
                    <div className="row wipeIn ani-4">
                        <div className="col-6 col-md-5 mb-3">
                            <div className="mb-1"><strong>Role</strong></div>
                            Case design and publicity materials
                        </div>
                        <div className="col-6 col-md-7 mb-3">
                            <div className="mb-1"><strong>Tools</strong></div>
                            Photoshop, Illustrator
                        </div>
                    </div>
                    <div className="d-inline-block wipeIn ani-5">
                        <Link className="d-inline-block btn-square btn-hover-pulse" to="/work/sutdring">
                            <div className="icon-arrow-right"></div>
                        </Link>
                    </div>
                </article>
                <div className="project-item-image wipeIn ani-1">
                    <Link to="/work/sutdring">
                        <Image
                            className="image wipeIn ani-1"
                            fluid={sutdRingCover.childImageSharp.fluid}
                            alt="SUTD Ring 4th Production" />
                    </Link>
                    <div className="hovering-object right">
                        <div className="cross">
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                        </div>
                    </div>
                </div>
            </FadeInSection>

        </div>
    )
}

export default Projects