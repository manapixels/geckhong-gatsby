import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import onClickOutside from 'react-onclickoutside'

import "./WorkBottomNav.scss"

const PAGES = [
    {
        path: '/work/selfi-corporate',
        name: 'Selfi.ai'
    },
    {
        path: '/work/threadparadise',
        name: 'Thread Paradise'
    },
    {
        path: '/work/timeui',
        name: 'Time UI'
    },
    {
        path: '/work/asksimple',
        name: 'AskSimple'
    },
    {
        path: '/work/sutdgradnight',
        name: 'SUTD Grad Night'
    },
    {
        path: '/work/nimbusrun',
        name: 'Nimbus Run'
    },
    {
        path: '/work/sutdring',
        name: 'SUTD Ring'
    },
]

const WorkBottomNav = ({ path }) => {

    const page = PAGES.findIndex(item => item.path === path) + 1

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    WorkBottomNav.handleClickOutside = () => setIsOpen(false)

    return (
        <div className="work-bottom-nav">
            <button 
                className={`left ${page === 1 ? "disabled" : ''}`}
                onClick={() => page !== 1 && navigate(PAGES[page-2].path)}
            >
                <span className="icon-arrow-left"></span> Previous
            </button>
            <div className={`center ${isOpen ? 'open' : ''}`} onClick={() => isOpen ? {} : toggle()}>

                <span className="icon-arrow-up2"></span>
                <span className="icon-arrow-down"></span>

                <ul>
                    {PAGES.map( (item, index) => 
                        <li className={page === (index+1) ? 'active' : ''} key={`page-link-${index}`}>
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    )}
                    <li>
                        <strong><a href="" onClick={toggle}>Close</a></strong>
                    </li>
                </ul>
            </div>
            <button 
                className={`right ${page === PAGES.length ? "disabled" : ''}`}
                onClick={() => page !== PAGES>length && navigate(PAGES[page].path)}
            >
                Next <span className="icon-arrow-right"></span>
            </button>
        </div>
    )
}

const clickOutsideConfig = {
    handleClickOutside: () => WorkBottomNav.handleClickOutside
}

WorkBottomNav.prototype = {}

export default onClickOutside(WorkBottomNav, clickOutsideConfig);