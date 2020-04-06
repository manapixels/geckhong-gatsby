import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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

                <div className="row mb-5">
                    <div className="col-6 offset-1">
                        <div className="short-profile-description mb-4">
                            <span className="quote-symbol">“</span>
                            <div className="wipeIn ani-1">I am a bridger,</div>
                            <div className="wipeIn ani-2">I make things happen.</div>
                        </div>
                        <p className="wipeIn ani-3">Creating products of value to both businesses and users is my goal - I want to make the world a better place for people through great products that people <b><i>actually</i></b> use. And the core to make this happen is bridging design, development and business goals. Users feel happy using the product, businesses profit and allocate more resources to build better stuff, and I am happy the world becomes better. Win-win for all. ✨🍺</p>
                    </div>

                </div>

                <div className="row mb-5">
                    <div className="col-6 offset-1">
                        <div className="core-skills-container">
                            <h2 className="title"><i><u>Tools</u></i></h2>
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
                        <div className="misc-skills-container mt-5">
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
                    <div className="col-4 offset-1">
                        <div className="skills-list-container">
                            <h2 className="title"><i><u>Skills</u></i></h2>
                            <ul className="skills-list">
                                <li className="skill">
                                    User journey &amp; testing
                                </li>
                                <li className="skill">
                                    Wireframing &amp; rapid prototyping
                                </li>
                                <li className="skill">
                                    Interaction design
                                </li>
                                <li className="skill">
                                    Coding &amp; integration
                                </li>
                                <li className="skill">
                                    User testing
                                </li>
                            </ul>
                        </div>
                        <div className="skills-list-container">
                            <i><u><b>Now learning</b></u></i>
                            <ul className="skills-list">
                                <li className="skill">
                                    Motion design
                                </li>
                                <li className="skill">
                                    Data visualization
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <section className="principles-section" id="principles">
                    <div className="row">
                        <div className="col-12 col-md-4 offset-1">
                            <h2 className="title"><i><u>Principles</u></i></h2>
                            <h3 className="text-right">Being emotionally-understanding</h3>
                            <p>We are emotional beings. My favourite part of UX is taking into consideration how people feel when they see errors, get surprises, or inertia to do something new to them. And creating wonderful experiences out of these considerations.</p>
                        </div>
                        <div className="col-12 col-md-4 ml-3" style={{ marginTop: '8.5rem' }}>
                            <h3>Build trust and comfort</h3>
                            <p className="p-md-0">Increase trust and comfort is like walking up a staircase. It takes effort and time. And breaking it is like a taking a lift back down. Fast and effortless. I like to be transparent and encourage users to go beyond their comfort zone. Dark UX technique is a no-no.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 offset-1">
                            <h3 className="m-md-0 text-right">Business x Design</h3>
                            <p>Whenever I work on business products, I consider the feasibility of a design, time to implementation and how to help product owners go beyond their initial aims. A better business product is a better world by design. It is a win-win for both business and users.</p>
                        </div>
                        <div className="col-12 col-md-4 ml-3" style={{ marginTop: '6.5rem' }}>
                            <h3>Standards as a foundation</h3>
                            <p>Design is built on defaults, and not a space for heavy experimentation. Design solves problem, not create obstacles for users. If it's a button, it should look like a button and not text. If it's easy to recognise a thing does, it is good design.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h1>Looking to collaborate on anything?</h1>
                    <p>Find me on Telegram <a href="https://t.me/manapixels" target="_blank" rel="noopener" role="button">@manapixels</a> or contact me on manapixels at gmail dot com. I usually reply within a day unless I'm travelling ✈️.</p>
                </section>
            </div>
        </>
    )
}

export default AboutPage