import React from "react"
import Helmet from "react-helmet"

import AboutSection from "./sections/about"
import DesignSection from "./sections/design"
import ContactForm from "./sections/contact"
import "./work.scss"

const WorkPage = () => {

	return (

		<>
			<Helmet>
                <title>Work</title>
			</Helmet>
			<div className="work-page">
				<AboutSection />
				<DesignSection />
				<ContactForm />
			</div>
		</>
	)
}

export default WorkPage