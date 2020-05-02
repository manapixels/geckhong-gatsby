import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import "./Pagination.scss"

const Pagination = ({ pageContext }) => {
    const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } = pageContext

    return (
        <nav className="pagination" role="navigation">
            <div className="older-posts">
                {nextPagePath && (

                    <Link to={nextPagePath} rel="next">
                            <span className="icon-arrow-left"></span> Older Posts 
                    </Link>
                )}
            </div>
            {numberOfPages > 1 && <div className="pagination-location">Page {humanPageNumber} of {numberOfPages}</div>}
            <div className="newer-posts">
                {previousPagePath && (

                    <Link to={previousPagePath} rel="prev">
                            Newer Posts <span className="icon-arrow-right"></span>
                    </Link>

                )}
            </div>
        </nav>
    )
}

Pagination.propTypes = {
    pageContext: PropTypes.object.isRequired,
}

export default Pagination
