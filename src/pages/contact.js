import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ContactMeSection from './sections/contact'
import "./index.scss"

const ContactPage = () => {

	return (

		<div>
			<section>
				<ContactMeSection />
			</section>
		</div>
	)
}

export default ContactPage