import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import './TagCard.scss'


const TagCard = ({ tag }) => {

    const { slug, name, postCount } = tag

    const url = `/${slug}/`

    

    return (
        <Link to={url} className="tag-card">
            {name}
            <span className="post-count">{postCount}</span>
        </Link>
    )
}

TagCard.propTypes = {
    tag: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        postCount: PropTypes.number.isRequired
    }).isRequired,
}

export default TagCard
