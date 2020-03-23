import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import SEO from "../components/seo"
import coreSkills from '../data/core-skills.json'
import miscSkills from '../data/misc-skills.json'
import skillsSvg from '../images/skills.svg'
import './about.scss'


const AboutPage = () => {

	const data = useStaticQuery(graphql`
	query {
		mehmeh_back: file(relativePath: { eq: "mehmehv3_back.png" }) {
			childImageSharp {
				fixed(width: 200, height: 200) {
				  ...GatsbyImageSharpFixed
				}
			  }
		},
	  }
	`)

	return (

		<>
			<SEO title="About me" />
			<div className="about-page">

                <div className="row">
                    <div className="col-5 offset-1">
                        <div className="short-profile-description">
                        <span className="quote-symbol">“</span>The alternative to good design is always bad design. There is no such thing as no design.
                            <div className="cite">- Adam Judge</div>
                        </div>
                    </div>
                    <div className="col-4 offset-1" style={{ marginTop: '5rem'}}>
                        I love the idea of creating products of value to both businesses and users - great products and successful businesses are a reflection of a win-win result, and the world gets better! Hence, I dropped my developer bags and decide to go on a design journey. I aim to bridge design and development, close up the gap between them so everyone gets to enjoy great products. ✨
                    </div>
                </div>

				<section className="skills-section detect-scroll-past" id="skills">

					<article className="skill-group-container visible">

                        <div className="row">
                            <div className="col-5 offset-1">
                                <div className="core-skills-container">
                                    <h2 className="title">Core Skills</h2>
                                    <div className="skill-group">
                                        {coreSkills.map((skill, index) => (
                                            <div className="skill" key={`skill-${index}`}>
                                                {/* <img src={skill.image_src} /> */}
                                                <svg className={`icon icon-${skill.image_src}`}>
                                                    <use xlinkHref={`${skillsSvg}#icon-${skill.image_src}`} />
                                                </svg>
                                                <span className="title">{skill.name}</span>
                                                <div className={`bar-wrapper ${skill.is_learning ? 'in-progress' : ''}`}>
                                                    <div className="bar">
                                                        <div className="bar-fill" style={{ width: skill.mastery_percentage + '%' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="col-5">
                                <div className="misc-skills-container pt-2">
                                <h2 className="title">Misc. pickups</h2>
                                <div className="skill-group misc-skills">
                                    {miscSkills.map((skill, index) => (
                                        <div className="skill" key={`skill-${index}`}>
                                            {/* <img src={skill.image_src} /> */}
                                            <svg className={`icon icon-${skill.image_src}`}>
                                                <use xlinkHref={`${skillsSvg}#icon-${skill.image_src}`} />
                                            </svg>
                                            <span className="title">{skill.name}</span>
                                            <div className={`bar-wrapper ${skill.is_learning ? 'in-progress' : ''}`}>
                                                <div className="bar">
                                                    <div className="bar-fill" style={{ width: skill.mastery_percentage + '%' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                </div>
                            </div>
                        </div>
					</article>
				</section>

				<section className="principles-section" id="principles">
					<div className="row">
                        <div className="col-12 col-md-4 offset-2">
                            <h1 className="text-green">Principles</h1>
                            <h3 className="text-right">Being emotionally-understanding</h3>
                            <p>We are emotional beings. My favourite part of UX is taking into consideration how people feel when they see errors, get surprises, or inertia to do something new to them. And creating wonderful experiences out of these considerations.</p>
                        </div>
                        <div className="col-12 col-md-4 ml-3" style={{marginTop: '8.5rem'}}>
                            <h3>Build trust and comfort</h3>
                            <p className="p-md-0">Increase trust and comfort is like walking up a staircase. It takes effort and time. And breaking it is like a taking a lift back down. Fast and effortless. I like to be transparent and encourage users to go beyond their comfort zone. Dark UX technique is a no-no.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 offset-1">
                            <h3 className="m-md-0 text-right">Business x Design</h3>
                            <p>Whenever I work on business products, I consider the feasibility of a design, time to implementation and how to help product owners go beyond their initial aims. A better business product is a better world by design. It is a win-win for both business and users.</p>
                        </div>
                        <div className="col-12 col-md-4 ml-3" style={{marginTop: '6.5rem'}}>
                            <h3>Standards as a foundation</h3>
                            <p>Design is built on defaults, and not a space for heavy experimentation. Design solves problem, not create obstacles for users. If it's a button, it should look like a button and not text. If it's easy to recognise a thing does, it is good design.</p>
                        </div>
                    </div>
				</section>
			</div>
		</>
	)
}

export default AboutPage