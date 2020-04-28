import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { isMobile } from "react-device-detect"
import { motion } from "framer-motion"

import "./sidebar.scss"

const event = new Event("pagechange")

const Sidebar = () => {

	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

	React.useEffect(() => {

		return () => {
			document.body.style.overflow = "unset"
		}
	}, [])

	const toggleMobileNav = () => {
		setIsMobileNavOpen(!isMobileNavOpen)
		if (!isMobileNavOpen)
			document.body.style.overflow = "hidden"
		else
			document.body.style.overflow = "unset"
	}

	const menuLinks = (
		<>
			<Link to="/" activeClassName="active" onClick={() => {
				window.dispatchEvent(event)
				isMobile && toggleMobileNav()
			}}>Work</Link>
			<Link to="/graphics" activeClassName="active" onClick={() => isMobile ? toggleMobileNav() : {}}>Graphics</Link>
			<Link to="/blog" activeClassName="active" onClick={() => isMobile ? toggleMobileNav() : {}}>Blog</Link>
		</>
	)

	return (
		<div className="sidebar">
			<div className="sidebar-container">

				{/* Header  */}

				<header>
					{/* Navigation for Desktop */}
					<div className="mt-3">
						<Link to="/" alt="Homepage" className="logo">
							<motion.svg 
								whileTap={{ scale: 0.9 }}
								className="icon icon-logo">
								<use xlinkHref="#icon-logo" />
							</motion.svg>
						</Link>
					</div>
					<menu className="desktop">
						{menuLinks}
					</menu>
					{/* Navigation for Mobile */}
					<div className={`bg-black ${isMobileNavOpen ? 'active' : ''}`}></div>
					<button className={`toggle ${isMobileNavOpen ? 'active' : ''}`} onClick={toggleMobileNav}>
						<div className="text">
							{isMobileNavOpen ? 'Close Menu' : 'Menu'}
						</div>
						<div className="icon icon-arrow-up2"></div>
					</button>
					<menu className={`mobile ${isMobileNavOpen ? 'active' : ''}`}>
						<div className="internal-links">
							{menuLinks}
						</div>
						<div className="social-container">
							<a className="resume" href="documents/resume.pdf" target="_blank" title="Download Résumé">Résumé</a>
							<a href="mailto:zhenyangg@outlook.com" target="_blank" rel="noopener" role="button">Email</a>
							<a href="https://t.me/manapixels" target="_blank" rel="noopener" role="button">Telegram</a>
							<a href="https://github.com/zhenyangg" target="_blank" rel="noopener" role="button">Github</a>
							<a href="https://sg.linkedin.com/in/zhenyanglim" target="_blank" rel="noopener" role="button">LinkedIn</a>
						</div>
					</menu>
				</header>


				{/* Footer */}

				<footer className="disable-select">
					<div className="social-container">
						<a className="resume" href="documents/resume.pdf" target="_blank" title="Download Résumé">Résumé</a>
						<a href="mailto:zhenyangg@outlook.com" target="_blank" rel="noopener" role="button">Email</a>
						<a href="https://t.me/manapixels" target="_blank" rel="noopener" role="button">Telegram</a>
						<a href="https://github.com/zhenyangg" target="_blank" rel="noopener" role="button">Github</a>
						<a href="https://sg.linkedin.com/in/zhenyanglim" target="_blank" rel="noopener" role="button">LinkedIn</a>
					</div>
				</footer>

			</div>

			<svg className="hidden">
				<symbol id="icon-logo" viewBox="0 0 26 32">
					<path fill="#000" d="M0 0h25.6v32h-25.6v-32z"></path>
					<path fill="#fff" d="M6.766 8.686h6.4c0.411 0 0.777 0.366 0.777 0.777v0c0 0.411-0.366 0.777-0.777 0.777h-6.4c-0.411 0-0.777-0.366-0.777-0.777v0c0.046-0.411 0.366-0.777 0.777-0.777z"></path>
					<path fill="#fff" d="M10.697 5.989v14.491c0 0.411-0.32 0.731-0.731 0.731v0c-0.411 0-0.731-0.32-0.731-0.731v-14.491c0-0.411 0.32-0.731 0.731-0.731v0c0.411 0 0.731 0.32 0.731 0.731z"></path>
					<path fill="#fff" d="M11.109 9.966l2.469 2.469c0.32 0.32 0.32 0.777 0 1.097v0c-0.32 0.32-0.777 0.32-1.097 0l-2.469-2.469c-0.32-0.32-0.32-0.777 0-1.097v0c0.32-0.32 0.777-0.32 1.097 0z"></path>
					<path fill="#fff" d="M10.011 11.063l-2.469 2.469c-0.32 0.32-0.777 0.32-1.097 0v0c-0.32-0.32-0.32-0.777 0-1.097l2.469-2.469c0.32-0.32 0.777-0.32 1.097 0v0c0.32 0.32 0.32 0.777 0 1.097z"></path>
					<path fill="#fff" d="M12.983 8.686h6.4c0.411 0 0.777 0.366 0.777 0.777v0c0 0.411-0.366 0.777-0.777 0.777h-6.4c-0.411 0-0.777-0.366-0.777-0.777v0c0-0.411 0.366-0.777 0.777-0.777z"></path>
					<path fill="#fff" d="M16.914 5.989v14.491c0 0.411-0.32 0.731-0.731 0.731v0c-0.411 0-0.731-0.32-0.731-0.731v-14.491c0-0.411 0.32-0.731 0.731-0.731v0c0.411 0 0.731 0.32 0.731 0.731z"></path>
					<path fill="#fff" d="M17.326 9.966l2.469 2.469c0.32 0.32 0.32 0.777 0 1.097v0c-0.32 0.32-0.777 0.32-1.097 0l-2.469-2.469c-0.32-0.32-0.32-0.777 0-1.097v0c0.274-0.32 0.777-0.32 1.097 0z"></path>
					<path fill="#fff" d="M16.229 11.063l-2.469 2.469c-0.32 0.32-0.777 0.32-1.097 0v0c-0.32-0.32-0.32-0.777 0-1.097l2.469-2.469c0.32-0.32 0.777-0.32 1.097 0v0c0.274 0.32 0.274 0.777 0 1.097z"></path>
					<path fill="#16ffaa" d="M15.314 18.56l-2.194 1.28v2.331l2.194-1.234z"></path>
					<path fill="#16ffaa" d="M13.12 16.777v2.56l2.194-1.234v-1.92c0-0.229-0.046-0.411-0.091-0.594l-2.103 1.189z"></path>
					<path fill="#16ffaa" d="M12.663 19.931l-2.149-1.28v2.377l2.149 1.234z"></path>
					<path fill="#16ffaa" d="M12.663 19.383v-2.56l-2.103-1.234c-0.046 0.183-0.046 0.366-0.046 0.549v2.011l2.149 1.234z"></path>
					<path fill="#16ffaa" d="M12.663 16.32v-2.56c-0.869 0.091-1.6 0.64-1.966 1.417l1.966 1.143z"></path>
					<path fill="#16ffaa" d="M13.12 22.72v0 6.034c1.234-0.091 2.194-1.143 2.194-2.377v-4.937l-2.194 1.28z"></path>
					<path fill="#16ffaa" d="M13.12 16.229l1.966-1.143c-0.366-0.777-1.097-1.28-1.966-1.326v2.469z"></path>
					<path fill="#16ffaa" d="M12.663 22.811l-2.149-1.28v4.8c0 1.234 0.96 2.24 2.149 2.377v-5.897z"></path>
				</symbol>
			</svg>
		</div>
	)
}


Sidebar.propTypes = {
	siteTitle: PropTypes.string,
}

Sidebar.defaultProps = {
	siteTitle: ``,
}

export default Sidebar