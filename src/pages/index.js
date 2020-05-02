import React from "react"
import { navigate } from "gatsby"
import SEO from "../components/seo"

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