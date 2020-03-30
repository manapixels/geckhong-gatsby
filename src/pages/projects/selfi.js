import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const SelfiProject = () => {

    const data = useStaticQuery(graphql`
		query {
			bg: file(relativePath: { eq: "projects/selfi/bg.png" }) {
				childImageSharp {
					fluid(maxWidth: 2000, maxHeight: 2091, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
		}
		`)

    return (

        <>
            <section className="popupHeader">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="project-details">
                            <h1>Selfi</h1>
                            <div className="description">
                                <ul>
                                    <li><p className="name">Period</p><p className="desc">Jan 20 and Ongoing</p></li>
                                    <li><p className="name">Role</p><p className="desc">Design + Front-end Dev</p></li>
                                    <li><p className="name">Project Scope</p><p className="desc">Selfi is a self-discovery platform built for everyone, no matter age, race, culture or religion. Users answer personality questions and they get traits for each quiz completed.</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <Image
                            className="image"
                            fluid={data.bg.childImageSharp.fluid}
                            alt="AskSimple" />
                    </div>
                </div>
            </section>

            <section className="popupBody">
                <h1>What is Selfi</h1>
                <p>We aim to consolidate the fragmented personality tests market by combining it into an all-in-one platform where people can use their personality data to achieve many things in life - understand themselves, find love, friends, work that they love and things they want to do. And the process of answering quizzes each about 1 to 2 mins would be a vastly different experience, considering that current personality tests take an average of half to 1 hour long to complete. </p>
                <p>We are in the initial stage currently, building quizzes that cover different parts of domains relating to the self, relationships with others, and work life. Creating value is not enough for a business. Capturing some of that value back will allow us to transform scale up our offerings to bring more value to our users. With that in mind, we aim to integrate connectors to existing platforms, such as job listing and recruitment systems to leverage on the power of personality data held by users.</p>


            </section>
        </>
    )
}

export default SelfiProject