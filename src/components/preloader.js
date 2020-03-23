import React from "react"
import './preloader.scss'

const Preloader = ({ }) => (
    <div id="loader-wrapper" className="viewportHeightFull">
        <div id="shapes">
            <div className="hexagon">
                <div className="diamond">
                    <div className="triangle"></div>
                </div>
            </div>
            <div className="progress-wrap wrap" data-progress-percent="100">
                <div className="progress-bar wrap"></div>
            </div>
            <div className="loader-words"></div>
        </div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
    </div>
)

export default Preloader