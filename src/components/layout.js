import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { motion, AnimatePresence } from 'framer-motion'

import Sidebar from "./sidebar"
import Preloader from "./preloader"

import "../styles/normalize.css"
import "../styles/bootstrap-grid.min.css"
import "../styles/fonts.scss"
import "../styles/responsive.scss"
import "../styles/global.scss"
import "../styles/animation.scss"
import "../styles/gifplayer.scss"
import "./layout.scss"


const Layout = ({ children, location }) => {
	const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
		</div>
	)
}

const duration = 0.5

const mainVariants = {
	initial: {
		opacity: 0,
	},
	enter: {
		opacity: 1,
		transition: {
			duration: duration,
			delay: duration,
			when: 'beforeChildren',
		},
	},
	exit: {
		opacity: 0,
		transition: { duration: duration },
	},
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout