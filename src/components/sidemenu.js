import React from 'react'
import './sidemenu.scss'

const SideMenu = () => 
    <nav id="menu-side">
    <Link to="/" role="button">Profile</Link>
    <Link to="/projects" role="button">UX-UI</Link>
    <Link to="/graphics" role="button">Graphics</Link>
    <Link to="/blog" role="button">Blog</Link>
    <Link className="resumeLink" to="documents/resume.pdf" target="_blank" rel="noopener">Résumé</Link>
    </nav>

export default SideMenu