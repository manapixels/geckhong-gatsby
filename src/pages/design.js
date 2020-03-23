import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import './design.scss'
import AskSimpleProject from "./projects/asksimple"
import NimbusRunProject from "./projects/nimbusrun"
import SelfiProject from "./projects/selfi"
import SUTDRingProject from "./projects/sutdring"
import SUTDGradNightProject from "./projects/sutdgradnight"
import ThreadParadiseProject from "./projects/threadparadise"
import TimeProject from "./projects/time"

const Projects = () => {

    const [currOpenProject, setCurrOpenProject] = useState(null)

    React.useEffect(() => {
        if (currOpenProject)
            document.body.style.overflow = 'hidden'
        else
            document.body.style.overflow = 'unset'

        return () => {
            document.body.style.overflow = "unset"
        }
    }, [currOpenProject])


    const data = useStaticQuery(
        graphql`
          query {
            selfiCover: file(relativePath: { eq: "projects/selfi/frontImage.png" }) {
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
        selfiCover, askSimpleCover, nimbusRunCover, sutdRingCover, sutdGradNightCover, threadParadiseCover, timeCover
    } = data


    return (
        <div className="projects-page">

            <article className={`popup ${currOpenProject !== null ? 'on' : ''}`}>
                {currOpenProject === 'selfi' && <SelfiProject />}
                {currOpenProject === 'threadparadise' && <ThreadParadiseProject />}
                {currOpenProject === 'asksimple' && <AskSimpleProject />}
                {currOpenProject === 'nimbusrun' && <NimbusRunProject />}
                {currOpenProject === 'sutdring' && <SUTDRingProject />}
                {currOpenProject === 'sutdgradnight' && <SUTDGradNightProject />}
                {currOpenProject === 'time' && <TimeProject />}
            </article>
            <button
                className={`icon-left icon-arrow-left ${currOpenProject !== null ? 'icon-on' : ''}`}
                onClick={
                    () => setCurrOpenProject(null)}>
                Go back to projects
            </button>


            {/* ******
            **********
            Selfi
            **********
            ****** */}

            <section className="project-item flexy detect-scroll-past" data-anchor="first">
                <div className="project-item-image">
                    <span className="moreinfo" role="button">7</span>
                    <button onClick={() => setCurrOpenProject("selfi")}>
                        <Image
                            className="image"
                            fluid={selfiCover.childImageSharp.fluid} 
                            alt="Selfi app" />
                    </button>
                </div>
                <article className="project-item-content visible">
                    <h2 className="title">Selfi</h2>
                    <div className="year">January 2020 and Ongoing</div>
                    <section className="skills">
                        <span>UI Design</span>
                        <span>Emotion Design</span>
                        <span>Data Visualization</span>
                        <span>React</span>
                    </section>
                    <div className="description" >
                        <p>Selfi is a self-discovery platform built for everyone, no matter age, race, culture or religion. Users answer personality questions and they get traits for each quiz completed.</p>
                    </div>
                    <button className="btn-primary cardButton" onClick={() => setCurrOpenProject("selfi")}>View</button>
                </article>
            </section>



            {/* ******
            **********
            Thread Paradise
            **********
            ****** */}

            <section className="project-item flexy detect-scroll-past" data-anchor="first">
                <div className="project-item-image">
                    <span className="moreinfo" role="button">6</span>
                    <button onClick={() => setCurrOpenProject("threadparadise")}>
                        <Image
                            className="image"
                            fluid={threadParadiseCover.childImageSharp.fluid} 
                            alt="Thread Paradise app" />
                    </button>
                </div>
                <article className="project-item-content visible">
                    <h2 className="title">Thread Paradise</h2>
                    <div className="year">January to April 2017</div>
                    <section className="skills">
                        <span>User Interface</span>
                        <span>Adobe XD</span>
                        <span>Needsfinding</span>
                        <span>User testing</span>
                        <span className="icon-person" title="4 team members">4</span>
                    </section>
                    <div className="description" >
                        <p>Thread Paradise is an eCommerce shopping app concept that seeks to solve multiple issues related to size-fit based on the culture and behaviours of Singaporeans.</p>
                    </div>
                    <button className="btn-primary cardButton" onClick={() => setCurrOpenProject("threadparadise")}>View</button>
                </article>
            </section>


            {/* ******
            **********
            Time UI
            **********
            ****** */}

            <section className="project-item flexy" data-anchor="first">
                <div className="project-item-image">
                    <span className="moreinfo" role="button">5</span>
                    <button onClick={() => setCurrOpenProject("time")}>
                        <Image
                            className="image"
                            fluid={timeCover.childImageSharp.fluid} 
                            alt="Time UI Homescreen" />
                    </button>
                </div>
                <article className="project-item-content visible">
                    <h2 className="title">Time UI</h2>
                    <div className="year">January to April 2017</div>
                    <section className="skills">
                        <span>User Interface</span>
                        <span>Adobe XD</span>
                        <span>Proto.io</span>
                        <span>User testing</span>
                        <span className="icon-person" title="4 team members">4</span>
                    </section>
                    <div className="description">
                        <p>The challenge: To redesign the user experience of using a mobile OS interface through appropriate signifiers, while reducing the click distance to access apps. Aside from bringing in familiar elements from iOS and Android, new functions using the concepts of time and voice are brought in to the mix.</p>
                    </div>
                    <button className="btn-primary cardButton" onClick={() => setCurrOpenProject("time")}>View</button>
                </article>
            </section>



            {/* ******
            **********
            ASKSIMPLE
            **********
            ****** */}

            <section className="project-item flexy" data-anchor="first">
                <div className="project-item-image">
                    <span className=" moreinfo" role="button">4</span>
                    <button onClick={() => setCurrOpenProject("asksimple")}>
                        <Image
                            className="image"
                            fluid={askSimpleCover.childImageSharp.fluid} 
                            alt="AskSimple app" />
                    </button>
                </div>
                <article className="project-item-content visible">
                    <h2 className="title">Ask Simple</h2>
                    <div className="year">September 2016 to January 2017</div>
                    <section className="skills">
                        <span>Android</span>
                        <span>Proto.io</span>
                        <span>Paper Prototype</span>
                        <span>User testing</span>
                        <span>Video</span>
                        <span className="icon-person" title="5 team members">5</span>
                    </section>
                    <div className="description" >
                        <p>AskSimple is a tool that helps learners participate in class anonymously and supports them in getting the answers they need as fast as possible. This app was designed in a Human-Computer Interaction Design <a href="http://mll.csie.ntu.edu.tw/course/hci_f16/" target="_blank" rel="noopener noreferrer">course</a> in National Taiwan University.</p>
                    </div>
                    <button className="btn-primary cardButton" onClick={() => setCurrOpenProject("asksimple")}>View</button>
                </article>
            </section>



            {/* ******
    **********
    SUTD GRADUATION NIGHT
    **********
    ****** */}

            <section className="project-item flexy" data-anchor="second">
                <div className="project-item-image">
                    <span className=" moreinfo" role="button">3</span>
                    <button onClick={() => setCurrOpenProject("sutdgradnight")}>
                        <Image
                            className="image"
                            fluid={sutdGradNightCover.childImageSharp.fluid} 
                            alt="SUTD Graduation Night 2016" />
                    </button>
                </div>
                <article className="project-item-content visible">
                    <h2 className="title">SUTD Grad Night</h2>
                    <div className="year">May to September 2016</div>
                    <section className="skills">
                        <span>Logo</span>
                        <span>Website</span>
                        <span>Character Design</span>
                        <span>Poster</span>
                        <span>Card Design</span>
                        <span className="icon-person" title="8 team members">8</span>
                    </section>
                    <div className="description">
                        <p>SUTD Graduation Night is an annual event organised specially for graduating seniors. In this project, our team of 7 planned and distributed materials over 4 months to engage seniors through offline and online platforms.</p>
                    </div>
                    <button className="btn-primary cardButton" onClick={() => setCurrOpenProject("sutdgradnight")}>View</button>
                </article>
            </section>



            {/* ******
    **********
    NIMBUS RUN
    **********
    ****** */}

            <section className="project-item flexy" data-anchor="third">
                <div className="project-item-image">
                    <span className=" moreinfo" role="button">2</span>
                    <button onClick={() => setCurrOpenProject("nimbusrun")}>
                        <Image
                            className="image"
                            fluid={nimbusRunCover.childImageSharp.fluid} 
                            alt="Nimbus Run - Android game" />
                    </button>
                </div>
                <article className="project-item-content visible">
                    <h2 className="title">Nimbus Run</h2>
                    <div className="year">January to April 2016</div>
                    <section className="skills">
                        <span>libgdx</span>
                        <span>Android</span>
                        <span>Kryonet</span>
                        <span>Photoshop</span>
                        <span>Illustrator</span>
                        <span className="icon-person" title="8 team members">8</span>
                    </section>
                    <div className="description">
                        <p>Nimbus Run is an Android-platform racing game inspired from Fun Run. Created by my group and I as part of our software construction <a href="https://istd.sutd.edu.sg/undergraduate/courses/50003-elements-of-software-construction">course</a>, the game logic was created from scratch in libgdx. We used KryoNet as our the network system, and Photoshop and Illustrator for character design and graphic assets.</p>
                    </div>
                    <button className="btn-primary cardButton" onClick={() => setCurrOpenProject("nimbusrun")}>View</button>
                </article>
            </section>


            {/* ******
    **********
    SUTD RING
    **********
    ****** */}

            <section className="project-item flexy" data-anchor="four">
                <div className="project-item-image">
                    <span className="moreinfo" role="button">1</span>
                    <button onClick={() => setCurrOpenProject("sutdring")}>
                        <Image
                            className="image"
                            fluid={sutdRingCover.childImageSharp.fluid} 
                            alt="SUTD Ring 4th Production" />
                    </button>
                </div>
                <article className="project-item-content visible">
                    <h2 className="title">SUTD Ring</h2>
                    <div className="year">September 2015 to March 2016</div>
                    <section className="skills">
                        <span>Photoshop</span>
                        <span>Illustrator</span>
                        <span className="icon-person" title="7 team members">7</span>
                    </section>
                    <div className="description">
                        <p>Started by two SUTD pioneer students, the SUTD RingComm produces the 'SUTD Ring' for each batch of undergraduates on a yearly basis. I was the designer for the ring case, as well as publicity materials for the batch of 2017 students.</p>
                    </div>
                    <button className="btn-primary cardButton" onClick={() => setCurrOpenProject("sutdring")}>View</button>
                </article>
            </section>
        </div>
    )
}

export default Projects