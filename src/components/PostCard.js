import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

import './PostCard.scss'


const PostCard = ({ post }) => {

    const url = `/${post.slug}/`
    const readingTime = readingTimeHelper(post)

    return (
        <Link to={url} className="post-card">
            <header className="post-card-header">
                {post.feature_image &&
                    <div className="post-card-image" style={{
                        backgroundImage: `url(${post.feature_image})` ,
                    }}></div>}
                
                {post.featured && <span>Featured</span>}
                <div className="post-card-date">{post.published_at_pretty}</div>
                <div className="post-card-title">{post.title}</div>
            </header>
            <footer className="post-card-footer">
                {post.tags && <span className="post-card-tags"> <Tags post={post} visibility="public" autolink={false} /></span>} • <span>{readingTime}</span>
            </footer>
        </Link>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
        published_at_pretty: PropTypes.string.isRequired
    }).isRequired,
}

export default PostCard
