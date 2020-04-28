import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const NimbusRunProject = () => {

    const data = useStaticQuery(graphql`
		query {
			bg: file(relativePath: { eq: "projects/nimbusrun/bg.png" }) {
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
                    <div className="col-12 col-md-6">
                        <Image
                            className="image"
                            fluid={data.bg.childImageSharp.fluid}
                            alt="Nimbus Run - Android game" />
                    </div>
                </div>
            </section>


            <section className="body">
                <h1>A brief introduction</h1>
                <p>As part of our software construction <a href="https://istd.sutd.edu.sg/undergraduate/courses/50003-elements-of-software-construction" target="_blank" rel="noopener noreferrer">course</a>, our team of four, made up of people from different cultures, came up with an Android game that utilizes network and concurrency skills we picked up during the course.
            </p>
                <h1>Conceptualization</h1>
                <p>When we first came together to brainstorm for ideas, we wanted to create something simple, yet fun to play. One of the games that we aspire to surpass, is the japanese arcade game named “Bishi Bashi”. It is made up of a series of games where multiple players compete with each on a series of mini games on a real-time basis. However, we realised that implementing the game mechanic for so many games was time-consuming. The mini game ideas that we came up with were pretty impressive and relatable to among our peers. Eventually, we settled on one out of the many “out of the box” games that we came up with.</p>
                <p>This final product is none other than <a href="https://play.google.com/store/apps/details?id=com.lemoninc.nimbusrun" alt="Nimbus Run on Play Store" target="_blank" rel="noopener noreferrer">Nimbus Run</a>. It’s a Fun Run-inspired racing game with our Asian mythological and legendary twist to it. Everything in this game is epic – epic backgrounds, epic gameplay, epic sounds and of course epic characters that are based on cloud. Hence the game name, Nimbus Run.</p>
                <h1>Characters &amp; theme</h1>
                <p>Our in-game characters are created based on the theme of <i>Asian mythologies</i>. These characters were inspired by the diversity in our group. For example, Krishna and Buddha are from the culture of our Nepalese member. I took on the task of designing 2D characters that are coloured in a wide spectrum of colours to show the level of diversity and vibrancy of our group. All characters are eventually put on clouds to align with the space cloud theme of the game.</p>
                <h1>Mechanics</h1>
                <p>Built from scratch and powered by libGDX, this game took 3 months from brainstorming to the completion. This game has to be multiplayer and network-connected. These requirements gave rise to challenges such as concurrency and network connectivity issues. We limited the number of players to four partly to increase engagement to a suitable level, and partly due to the limits of KryoNet. In a game session, all players have to be connected to the same Wi-Fi network. One player will double as a "server", while up to three other players can play as "clients". During the game itself, a UDP packet is sent to the "server" if a player moves, and the server in turn broadcasts the updates to other "clients". Detailed thread-safety management and game mechanics can be found in <a href="images/projects/nimbusrun/NimbusRunReport.pdf" target="_blank">this</a> PDF file. <a className="btn-primary" href="https://play.google.com/store/apps/details?id=com.lemoninc.nimbusrun" alt="Nimbus Run on Play Store" target="_blank" role="button" rel="noopener noreferrer">Try Nimbus Run on Android</a> <a className="btn-primary" href="https://github.com/zhenyangg/LemonInc" target="_blank" role="button" rel="noopener noreferrer">Source code</a></p>
                <a className="bigimages" href="images/projects/nimbusrun/artworkdisplay.jpg" target="_blank" role="button"><img src="images/load.svg" data-src="images/projects/nimbusrun/artworkdisplay.jpg" alt="Nimbus Run - Characters" className="lazy" /></a>
            </section>
        </div>
    )
}

export default NimbusRunProject