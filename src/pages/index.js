import React, { useEffect } from "react"
import { navigate } from "gatsby"

const IndexPage = () => {

	useEffect(() => {
		navigate("/work")
	}, [])

	return (

		<>
			<div className="index-page">
			</div>
		</>
	)
}

export default IndexPage