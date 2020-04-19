import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"

import Sidebar from "./sidebar"
import Preloader from "./preloader"
import Cursor from "./cursor"
import debounce from "../helpers/debounce"
import "./layout.scss"

let cursorRef = React.createRef()

const Layout = ({ children, location }) => {

	const [showScrollToTopBtn, setShowScrollToTopBtn] = useState(false)
	
	

	useEffect(() => {
		const cursor = new Cursor(cursorRef);

		[...document.querySelectorAll('a'), ...document.querySelectorAll('button')].forEach(el => {
			el.addEventListener('mouseenter', () => cursor.emit('enter'));
			el.addEventListener('mouseleave', () => cursor.emit('leave'));
		})
	})

	const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

	React.useEffect(() => {
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

			<Sidebar siteTitle={data.site.siteMetadata.title} />
			<button
				className={`go-back-up ${showScrollToTopBtn ? '' : 'invisible'}`}
				onClick={() => window.scroll({
					top: 0,
					behavior: 'smooth'
				})}>
				<span className="icon-arrow-up2"></span>
			</button>
			<svg className="cursor" width="220" height="220" viewBox="0 0 220 220" ref={(ref) => cursorRef = ref}>
				<defs>
					<filter id="filter-1" x="-50%" y="-50%" width="200%" height="200%"
						filterUnits="objectBoundingBox">
						<feTurbulence type="fractalNoise" baseFrequency="0" numOctaves="1" result="warp" />
						<feOffset dx="-30" result="warpOffset" />
						<feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warpOffset" />
					</filter>
				</defs>
				<circle className="cursor__inner" cx="110" cy="110" r="60" />
			</svg>
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