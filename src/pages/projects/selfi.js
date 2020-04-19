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

                <p>Selfi is my baby - I witnessed its birth and its transformation since then. Back in late 2018 our team had an idea of creating a platform for companies to test job candidates' personality for role suitability. There was a need to create a consumer-facing site for candidates to take the quiz, as well as a company-facing site for admins to manage the tests, and so Selfi Personal and Selfi Corporate was born. Selfi was named the way it is because I felt the greatest value it would provide to individuals and the companies we serve was the opportunity to have a look at their own reflection - what they truly are. By understanding their real selfs, I hope it will inspire change for the better.</p>

                <p>As of April 2020, our aim is to consolidate the fragmented personality tests market by combining it into an all-in-one platform where people can use their personality data to achieve many things in life - understand themselves, find love, friends, work that they love and things they want to do. I devoured many books on startup traction and businesses, thinking of ways we can align the designs of our platforms with a business plan -- we have none currently. We have our hypotheses. Companies want these personality data, to understand compatibility to job roles, how teams work together and can work better together, how to hire someone who will adapt to the company culture etc. And these personality data that each individual hold is a valuable resource that is highly sought after. Our role then, is to energize this synergy. As we build and discuss, I learned that business design and UX design are interweaved. I'm not sure it's a start-up thing, or it's just me and my interests.</p>
                
                <p>As a designer with business exp based on books, the most relevant work I focus on is a product's uniqueness and value to users. These two build the foundation for differentiation that will make price competition irrelevant. The experience has to be uniquely Selfi.</p>
                
                <p>The first thing is the experience of speed. each about 1 to 2 mins would be a vastly different experience, considering that current personality tests take an average of half to 1 hour long to complete. The world's attention span has changed and the interfaces we interact with should reflect changes as well. Much like how we use QR codes to conduct instant payments, as oppose to the slow manual counting of coins and notes in the past.</p>
                
                <p>Creating value is not enough for a business. Capturing some of that value back will allow us to transform scale up our offerings to bring more value to our users. With that in mind, we aim to integrate connectors to existing platforms, such as job listing and recruitment systems to leverage on the power of personality data held by users.</p>

                <p></p>


            </section>
        </>
    )
}

export default SelfiProject