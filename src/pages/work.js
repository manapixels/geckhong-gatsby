import React from "react"

import SEO from "../components/seo"
import AboutSection from "./sections/about"
import DesignSection from "./sections/design"
import ContactForm from "./sections/contact"
import './index.scss'

const WorkPage = () => {

	return (

		<>
			<SEO title="Work" />
			<div className="work-page" style={{marginRight: '10rem'}}>
				<AboutSection />
				<DesignSection />
				<ContactForm />
			</div>
		</>
	)
}

export default WorkPage