import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import './about.scss'

const About = () => {

    const data = useStaticQuery(
        graphql`
          query {
            portrait: file(relativePath: { eq: "portrait.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 2100, maxHeight: 2100, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
            }
        }`)

    return (

        <>
            <div className="about">

                <div className="row mb-5">
                    <div className="col-12 col-md-6 offset-md-1 align-self-center order-2 order-md-1">
                        <div className="primary-bio mb-4">
                            <span className="quote-symbol">“</span>

                            <div className="wipeIn ani-1">I'm a product designer, <div className="wipeIn ani-3 d-inline-block text-green">a bridger</div> and a builder. I work towards bridging Web2 and Web3.</div>
                        </div>
                        <p className="secondary-bio wipeIn ani-2">My interest lies in creating products of value to people, especially through social apps, to make the world a better place. To that end, I meld design, development and business goals, and actively consider perspectives across multiple discipines. I work towards a trustless web through programmable software. 🍺</p>
                        <a className="link-highlight mr-5 wipeIn ani-2" href="https://t.me/manapixels" target="_blank" rel="noopener noreferrer">
                            <span>Chat on Telegram</span>
                            <svg className="icon icon-arrow-right"><use xlinkHref="#icon-arrow-right"></use></svg>
                        </a>
                        <a className="link-highlight mr-5 wipeIn ani-2" href="#contact" target="_blank" title="Download Résumé">
                            <span>Email me</span>
                            <svg className="icon icon-arrow-right"><use xlinkHref="#icon-arrow-right"></use></svg>
                        </a>
                        <a className="link-highlight mr-5 wipeIn ani-2" href="/resume.pdf" target="_blank" title="Download Résumé">
                            <span>View résumé</span>
                            <svg className="icon icon-arrow-right"><use xlinkHref="#icon-arrow-right"></use></svg>
                        </a>
                        <svg className="hidden">
                            <symbol id="icon-arrow-right" viewBox="0 0 20 20">
                                <path d="M16.172 9l-6.071-6.071 1.414-1.414 8.485 8.485-8.485 8.485-1.414-1.414 6.071-6.071h-16.172v-2z"></path>
                            </symbol>
                        </svg>
                    </div>
                    <div className="col-12 col-md-5 order-1 order-md-2">
                        <Image
                            className="image wipeIn ani-1"
                            fluid={data.portrait.childImageSharp.fluid}
                            alt="Zhenyang's Portrait" />
                    </div>
                </div>

                <div className="animating-lines">

                </div>

                <section className="skills-section">
                    <div className="row mb-5">
                        <div className="col-lg-2 offset-lg-1 hidden-md p-4 d-none d-md-block">
                            <div className="bg-gray-light h-100 w-100"></div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="skill-category">
                                <div className="skills-list-container">
                                    <h2 className="title"><i><u>Design skills</u></i></h2>
                                    <ul className="skills-list">
                                        <li className="skill">
                                            User journey &amp; testing
                                        </li>
                                        <li className="skill">
                                            Wireframing, mock-up, prototyping
                                        </li>
                                        <li className="skill">
                                            Interaction design, micro-interactions
                                        </li>
                                        <li className="skill">
                                            Mobile UX
                                        </li>
                                        <li className="skill">
                                            Branding
                                        </li>
                                        <li className="skill">
                                            Illustration
                                        </li>
                                        <li className="skill">
                                            Data Visualisation
                                        </li>
                                    </ul>
                                </div>
                                <div className="skills-list-container">
                                    <i><u><b>Now learning</b></u></i>
                                    <ul className="skills-list">
                                        <li className="skill">
                                            Motion design (on Premiere) <span className="icon-arrow-up2 move-up-fade-out"></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="skill-category">
                                <div className="skills-list-container">
                                    <h2 className="title"><i><u>Development skills</u></i></h2>
                                    <ul className="skills-list">
                                        <li className="skill">
                                            React, Redux, Angular, reusable components
                                        </li>
                                        <li className="skill">
                                            HTML, (S)CSS, responsive design
                                        </li>
                                        <li className="skill">
                                            AWS (S3, Cloudfront, Lambda), GCloud, domain management, RESTful API, GraphQL
                                        </li>
                                        <li className="skill">
                                            Webpack optimizations, PWA
                                        </li>
                                        <li className="skill">
                                            Express.js + Webhooks = Bot
                                        </li>
                                        <li className="skill">
                                            Python, Java, C++, Ruby
                                        </li>
                                    </ul>
                                </div>
                                <div className="skills-list-container">
                                    <i><u><b>Now learning</b></u></i>
                                    <ul className="skills-list">
                                        <li className="skill">
                                            Solidity <span className="icon-arrow-up2 move-up-fade-out"></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="skill-category">
                                <div className="skills-list-container">
                                    <h2 className="title"><i><u>Bridge skills</u></i></h2>
                                    <ul className="skills-list">
                                        <li className="skill">
                                            Practical design for coding
                                        </li>
                                        <li className="skill">
                                            Protoype interactions and animations
                                        </li>
                                        <li className="skill">
                                            Align product design with business objectives
                                        </li>
                                        <li className="skill">
                                            Google Analytics + GTM
                                        </li>
                                    </ul>
                                </div>
                                <div className="skills-list-container">
                                    <i><u><b>Now learning</b></u></i>
                                    <ul className="skills-list">
                                        <li className="skill">
                                            Standardize, maintain design system <span className="icon-arrow-up2 move-up-fade-out"></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="skill-category">
                                <div className="skills-list-container">
                                    <h2 className="title"><i><u className="green">My approach</u></i></h2>
                                    <ul className="skills-list">
                                        <li className="skill">
                                            Consider emotions in Design
                                        </li>
                                        <li className="skill">
                                            Trustless designs
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default About