import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import DesignSection from "./design"
import './index.scss'


const IndexPage = () => {

	return (

		<>
			<SEO title="Home" />
			<div className="index-page">

				<section className="landing-section flex-end detect-scroll-past">

					<div className="self-intro">
						<div className="p1 wipeIn ani-1">
							I'm a <span className="text-green">product designer</span> at <a href="https://selfi.ai" target="_blank" rel="noopener" className="selfi">Selfi</a>, a platform that empowers people to understand and utilise their personality data.
						</div>
					</div>

					<a className="link-highlight mr-5 wipeIn ani-2" href="documents/resume.pdf" target="_blank" title="Download Résumé">
						<span>View résumé</span>
						<svg class="icon icon-arrow-right"><use xlinkHref="#icon-arrow-right"></use></svg>
					</a>
					<Link to="/about" className="link-highlight mr-5 wipeIn ani-3">
						<span>More about me</span>
						<svg class="icon icon-arrow-right"><use xlinkHref="#icon-arrow-right"></use></svg>
					</Link>

					<svg className="hidden">
						<symbol id="icon-arrow-right" viewBox="0 0 20 20">
							<path d="M16.172 9l-6.071-6.071 1.414-1.414 8.485 8.485-8.485 8.485-1.414-1.414 6.071-6.071h-16.172v-2z"></path>
						</symbol>
					</svg>

				</section>
				
				<DesignSection />
			</div>
		</>
	)
}

export default IndexPage