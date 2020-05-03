import React, { useState } from "react"
import PropTypes from "prop-types"
import { motion, AnimatePresence } from "framer-motion"

import Sidebar from "./Sidebar"
import Preloader from "./Preloader"
import Cursor from "./Cursor"
import debounce from "../helpers/debounce"
// import SmoothScroll from './SmoothScroll2'

import "./Layout.scss"


/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/


const Layout = ({ children, location }) => {

	const [showScrollToTopBtn, setShowScrollToTopBtn] = useState(false)

	// let smoothScroll

	React.useEffect(() => {
		// smoothScroll = new SmoothScroll()
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const handleScroll = debounce(() => {
		if ((window.scrollY > window.innerHeight * 0.3) && !showScrollToTopBtn)
			setShowScrollToTopBtn(true)
		else
			setShowScrollToTopBtn(false)
	}, 250)

	return (

		<>
			<div className="layout-wrapper">

				{/* <Preloader /> */}
				<AnimatePresence>
					<motion.main
						className="main-content"
						key={location.pathname}
						variants={mainVariants}
						initial="initial"
						animate="enter"
						exit="exit"
					>
						{/* All the main content gets inserted here, index.js, post.js */}
						{children}
					</motion.main>
				</AnimatePresence>


				<Sidebar location={location} />
				<button
					className={`go-back-up ${showScrollToTopBtn ? '' : 'invisible'}`}
					onClick={() => window.scroll({
						top: 0,
						behavior: 'smooth'
					})}>
					<span className="icon-arrow-up2"></span>
				</button>
				<Cursor />
			</div>
		</>
	)
}

const duration = 0.4

const mainVariants = {
	initial: {
		y: 20,
		opacity: 0,
	},
	enter: {
		y: 0,
		opacity: 1,
		transition: {
			duration: duration,
			delay: duration,
			when: 'beforeChildren',
		},
	},
	exit: {
		y: -20,
		opacity: 0,
		transition: { duration: duration },
	},
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	bodyClass: PropTypes.string,
}

export default Layout