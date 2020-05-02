import React from "react"

import SEO from "../components/seo"
import AboutSection from "./sections/about"
import DesignSection from "./sections/design"
import ContactForm from "./sections/contact"
import "./work.scss"

const WorkPage = () => {

	return (

		<>
			<SEO title="Work" />
			<div className="work-page">
				<AboutSection />
				<DesignSection />
				<ContactForm />
			</div>
		</>
	)
}

export default WorkPage