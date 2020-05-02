import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import './TagCard.scss'


const TagCard = ({ tag, location }) => {

    const { slug, name, postCount } = tag

    const url = `/blog/tag/${slug}`

    return (
        <Link to={url} className="tag-card" activeClassName="active">
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
