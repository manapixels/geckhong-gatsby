import React from "react"

import SEO from "../components/seo"
import AboutSection from "./sections/about"
import DesignSection from "./sections/design"
import './index.scss'


const IndexPage = () => {

	return (

		<>
			<SEO title="Home" />
			<div className="index-page">
				<AboutSection />
				<DesignSection />
			</div>
		</>
	)
}

export default IndexPage