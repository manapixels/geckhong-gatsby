import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Helmet from "react-helmet"

import WorkBottomNav from "../../components/WorkBottomNav"
import "./work.scss"


const NimbusRunProject = ({ location }) => {

    useEffect(() => {
        document.documentElement.scrollTop = 0
    }, [])

    const data = useStaticQuery(graphql`
		query {
            artboard: file(relativePath: { eq: "projects/nimbusrun/artboard.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1639, maxHeight: 1299, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
			bg: file(relativePath: { eq: "projects/nimbusrun/bg.png" }) {
				childImageSharp {
					fluid(maxWidth: 2000, maxHeight: 2091, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            char_buddha: file(relativePath: { eq: "projects/nimbusrun/char_buddha.png" }) {
				childImageSharp {
					fluid(maxWidth: 2560, maxHeight: 1441, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            char_fox: file(relativePath: { eq: "projects/nimbusrun/char_fox.png" }) {
				childImageSharp {
					fluid(maxWidth: 2560, maxHeight: 1441, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            char_kappa: file(relativePath: { eq: "projects/nimbusrun/char_kappa.png" }) {
				childImageSharp {
					fluid(maxWidth: 2560, maxHeight: 1441, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            char_krishna: file(relativePath: { eq: "projects/nimbusrun/char_krishna.png" }) {
				childImageSharp {
					fluid(maxWidth: 2560, maxHeight: 1441, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            char_pontianak: file(relativePath: { eq: "projects/nimbusrun/char_pontianak.png" }) {
				childImageSharp {
					fluid(maxWidth: 2560, maxHeight: 1441, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            char_snake: file(relativePath: { eq: "projects/nimbusrun/char_snake.png" }) {
				childImageSharp {
					fluid(maxWidth: 2560, maxHeight: 1441, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            gamebg: file(relativePath: { eq: "projects/nimbusrun/gamebg.png" }) {
				childImageSharp {
					fluid(maxWidth: 2000, maxHeight: 1123, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            icon: file(relativePath: { eq: "projects/nimbusrun/icon.png" }) {
				childImageSharp {
					fixed(width: 200, height: 200, quality: 90) {
						...GatsbyImageSharpFixed
					}
				}
            },
            landing_screen: file(relativePath: { eq: "projects/nimbusrun/landing_screen.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000, maxHeight: 527, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            platform_flat: file(relativePath: { eq: "projects/nimbusrun/platform_flat.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000, maxHeight: 379, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            platform_mountain: file(relativePath: { eq: "projects/nimbusrun/platform_mountain.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000, maxHeight: 869, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            platform_pit: file(relativePath: { eq: "projects/nimbusrun/platform_pit.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000, maxHeight: 605, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            platform_plateau: file(relativePath: { eq: "projects/nimbusrun/platform_plateau.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000, maxHeight: 789, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            snailvstorty: file(relativePath: { eq: "projects/nimbusrun/snailvstorty.png" }) {
				childImageSharp {
					fluid(maxWidth: 3198, maxHeight: 1567, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
		}
        `)

    return (
        <>
            <Helmet>
                <title>Work • Nimbus Run</title>
            </Helmet>
            <div className="work">

                <section className="header">
                    <div className="row">
                        <div className="col-12 col-md-6 order-2 order-md-1">
                            <div className="project-details">
                                <h1>Nimbus Run</h1>
                                <div className="description">
                                    <ul>
                                        <li><p className="name">Period</p><p className="desc">Jan to Apr 16</p></li>
                                        <li><p className="name">Role</p><p className="desc">Character Design<br />Asset Creation,<br />Game Logic</p></li>
                                        <li><p className="name">Project Scope</p><p className="desc">Make a multiplayer mobile game that supports concurrency and live playing.</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 order-1 order-md-2">
                            <Image
                                className="image"
                                fluid={data.bg.childImageSharp.fluid}
                                alt="Nimbus Run - Android game" />
                        </div>
                    </div>
                </section>


                <section className="body">

                    <Image
                        className="image d-block"
                        fixed={data.icon.childImageSharp.fixed}
                        alt="Nimbus Run Logo" />

                    <h1>A brief introduction</h1>
                    <p>
                        As part of our software construction <a href="https://istd.sutd.edu.sg/undergraduate/courses/50003-elements-of-software-construction" target="_blank" rel="noopener noreferrer">course</a>, our team of four, made up of people from different cultures, came up with Nimbus Run, an Android game that utilizes network and concurrency skills we picked up during the course.
                    </p>

                    <h1>Conceptualization</h1>

                    <p>
                        When we first came together to brainstorm for ideas, we wanted to create something simple, yet fun to play. One of the games that we aspire to surpass, is the japanese arcade game named “Bishi Bashi”. It is made up of a series of games where multiple players compete with each on a series of mini games on a real-time basis. However, we realised that implementing the game mechanic for so many games was time-consuming. The mini game ideas that we came up with were pretty impressive and relatable to among our peers. The concept of "Snail vs Torty", our initial concept, is a game where two players fight against each other in a series of mini games to win the top score.
                    </p>

                    <Image
                        className="image"
                        fluid={data.snailvstorty.childImageSharp.fluid}
                        alt="Snail vs Torty concept" />
                    <div className="caption mb-3">Initial concept - Snail vs Torty</div>


                    <p>
                        Eventually, we settled on one out of the many “out of the box” games that we came up with.This final product is none other than <a href="https://play.google.com/store/apps/details?id=com.lemoninc.nimbusrun" alt="Nimbus Run on Play Store" target="_blank" rel="noopener noreferrer">Nimbus Run</a>. It’s a Fun Run-inspired racing game with our Asian mythological and legendary twist to it. Everything in this game is epic – epic backgrounds, epic gameplay, epic sounds and of course epic characters that are based on cloud. Hence the game name, Nimbus Run.
                    </p>

                    <Image
                        className="image"
                        fluid={data.landing_screen.childImageSharp.fluid}
                        alt="Nimbus Run Landing Screen" />
                    <div className="caption mb-3">Nimbus Run Landing Screen</div>


                    <h1>Characters &amp; theme</h1>
                    <p>
                        Our in-game characters are created based on the theme of <i>Asian mythologies</i>. These characters were inspired by the diversity in our group. For example, Krishna and Buddha are from the culture of our Nepalese member. I took on the task of designing 2D characters that are coloured in a wide spectrum of colours to show the level of diversity and vibrancy of our group. All characters are eventually put on clouds to align with the space cloud theme of the game.
                    </p>

                    <Image
                        className="image"
                        fluid={data.char_buddha.childImageSharp.fluid}
                        alt="Character - Buddha" />
                    <div className="caption mb-3">Character Design - Buddha</div>
                    <Image
                        className="image"
                        fluid={data.char_fox.childImageSharp.fluid}
                        alt="Character - Nine-tailed Fox" />
                    <div className="caption mb-3">Character Design - Nine-tailed Fox</div>
                    <Image
                        className="image"
                        fluid={data.char_kappa.childImageSharp.fluid}
                        alt="Character - Kappa" />
                    <div className="caption mb-3">Character Design - Kappa</div>
                    <Image
                        className="image"
                        fluid={data.char_krishna.childImageSharp.fluid}
                        alt="Character - Krishna" />
                    <div className="caption mb-3">Character Design - Krishna &amp; Sheshnag</div>
                    <Image
                        className="image"
                        fluid={data.char_pontianak.childImageSharp.fluid}
                        alt="Character - Pontianak" />
                    <div className="caption mb-3">Character Design - Pontianak</div>
                    <Image
                        className="image"
                        fluid={data.char_snake.childImageSharp.fluid}
                        alt="Character - Madame White Snake" />
                    <div className="caption mb-3">Character Design - Madame White Snake</div>

                    <h1>World Design</h1>
                    <p>
                        The game world is based on a celestial setting, the otherworldly kind of setting that I imagine these characters would be in. It's a mish-mash of different Asian culture settings, with the idea of celestial beings originating from Chinese, flower from Japan. The same swirls used in the character designs get replicated in the clouds illustrated here. 
                    </p>
                    <Image
                        className="image"
                        fluid={data.gamebg.childImageSharp.fluid}
                        alt="Game world background" />
                    <div className="caption mb-3">Game world background</div>

                    <p>
                        Of course, the characters don't just fly through the skies. Gravity still apply, and platforms are illustrated for this purpose. A total of 4 types of platform is created to vary the obstacles characters face. We have some character skills that make getting past certain kinds of platforms hard.
                    </p>
                    
                    <Image
                        className="image"
                        fluid={data.platform_flat.childImageSharp.fluid}
                        alt="Platform Type I - Flat" />
                    <div className="caption mb-3">Platform Type I - Flat</div>
                    <Image
                        className="image"
                        fluid={data.platform_mountain.childImageSharp.fluid}
                        alt="Platform Type II - Mountain" />
                    <div className="caption mb-3">Platform Type II - Mountain</div>
                    <Image
                        className="image"
                        fluid={data.platform_pit.childImageSharp.fluid}
                        alt="Platform Type III - Pit" />
                    <div className="caption mb-3">Platform Type III - Pit</div>
                    <Image
                        className="image"
                        fluid={data.platform_plateau.childImageSharp.fluid}
                        alt="Platform Type IV - Plateau" />
                    <div className="caption mb-3">Platform Type IV - Plateau</div>


                    <h1>Mechanics</h1>
                    <p>
                        Built from scratch and powered by libGDX, this game took 3 months from brainstorming to the completion. This game has to be multiplayer and network-connected. These requirements gave rise to challenges such as concurrency and network connectivity issues. We limited the number of players to four partly to increase engagement to a suitable level, and partly due to the limits of KryoNet. In a game session, all players have to be connected to the same Wi-Fi network. One player will double as a "server", while up to three other players can play as "clients". During the game itself, a UDP packet is sent to the "server" if a player moves, and the server in turn broadcasts the updates to other "clients". Detailed thread-safety management and game mechanics can be found in <a href="images/projects/nimbusrun/NimbusRunReport.pdf" target="_blank">this</a> PDF file.
                    </p>

                    <a className="bigimages" href={data.artboard && data.artboard.childImageSharp.fluid.src} target="_blank" role="button">
                        <Image
                            className="image"
                            fluid={data.artboard.childImageSharp.fluid}
                            alt="Nimbus Run - Artboard" />
                    </a>
                    <div className="caption mb-3">Nimbus Run Artboard</div>

                    <a className="btn-primary mt-4" href="https://play.google.com/store/apps/details?id=com.lemoninc.nimbusrun" alt="Nimbus Run on Play Store" target="_blank" role="button" rel="noopener noreferrer">Try Nimbus Run on Android</a>


                </section>

                <WorkBottomNav path={location.pathname} />

            </div>
        </>
    )
}

export default NimbusRunProject