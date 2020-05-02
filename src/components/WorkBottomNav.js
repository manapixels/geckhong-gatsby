import React, { useState } from "react"
import { Link } from "gatsby"
import onClickOutside from 'react-onclickoutside'

import "./WorkBottomNav.scss"


const WorkBottomNav = ({ page }) => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    WorkBottomNav.handleClickOutside = () => setIsOpen(false)

    return (
        <div className="work-bottom-nav">
            <div className={`left ${page === 1 ? "disabled" : ''}`}>
                <span className="icon-arrow-left"></span> Previous
                    </div>
            <div className={`center ${isOpen ? 'open' : ''}`} onClick={() => isOpen ? {} : toggle()}>

                <span className="icon-arrow-up2"></span>
                <span className="icon-arrow-down"></span>

                <ul>
                    <li className={page === 1 ? 'active' : ''}>
                        <Link to="/work/selfi">Selfi</Link>
                    </li>
                    <li className={page === 2 ? 'active' : ''}>
                        <Link to="/work/threadparadise">Thread Paradise</Link>
                    </li>
                    <li className={page === 3 ? 'active' : ''}>
                        <Link to="/work/timeui">Time UI</Link>
                    </li>
                    <li className={page === 4 ? 'active' : ''}>
                        <Link to="/work/asksimple">AskSimple</Link>
                    </li>
                    <li className={page === 5 ? 'active' : ''}>
                        <Link to="/work/sutdgradnight">SUTD Grad Night</Link>
                    </li>
                    <li className={page === 6 ? 'active' : ''}>
                        <Link to="/work/nimbusrun">Nimbus Run</Link>
                    </li>
                    <li className={page === 7 ? 'active' : ''}>
                        <Link to="/work/sutdring">SUTD Ring</Link>
                    </li>
                    <li>
                        <strong><a href="" onClick={toggle}>Close</a></strong>
                    </li>
                </ul>
            </div>
            <div className={`right ${page === 7 ? "disabled" : ''}`}>
                Next <span className="icon-arrow-right"></span>
            </div>
        </div>
    )
}

const clickOutsideConfig = {
    handleClickOutside: () => WorkBottomNav.handleClickOutside
}

export default onClickOutside(WorkBottomNav, clickOutsideConfig);