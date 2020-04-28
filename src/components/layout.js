import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"

import Sidebar from "./sidebar"
import Preloader from "./preloader"
import ContactForm from "./contact"
import Cursor from "./cursor"
import debounce from "../helpers/debounce"
import SmoothScroll from './smoothScroll'
import "./layout.scss"

const Layout = ({ children, location }) => {

	const [showScrollToTopBtn, setShowScrollToTopBtn] = useState(false)

	const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

	let smoothScroll

	React.useEffect(() => {
		smoothScroll = new SmoothScroll()
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const handleScroll = debounce(() => {
		if ((window.scrollY > window.innerHeight * 0.3) && !showScrollToTopBtn)
			setShowScrollToTopBtn(true)
		else if ((window.scrollY < window.innerHeight * 0.3) && showScrollToTopBtn)
			setShowScrollToTopBtn(false)
	}, 250)

	return (
		<div className="viewport">
			<div className="scroll-container">
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

							{children}
						</motion.main>
					</AnimatePresence>

					<ContactForm />

				</div>
				<Cursor />
			</div>
			<Sidebar siteTitle={data.site.siteMetadata.title} />
			<button
				className={`go-back-up ${showScrollToTopBtn ? '' : 'invisible'}`}
				onClick={() => window.scroll({
					top: 0,
					behavior: 'smooth'
				})}>
				<span className="icon-arrow-up2"></span>
			</button>

		</div>
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
}

export default Layout