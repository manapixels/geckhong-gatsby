import React from "react"
import { navigate } from "gatsby"

import SEO from "../components/seo"
import './index.scss'


const IndexPage = () => {

	navigate("/work")

	return (

		<>
			<SEO title="Home" />
			<div className="index-page">
			</div>
		</>
	)
}

export default IndexPage