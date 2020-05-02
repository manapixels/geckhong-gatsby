import React from "react"
import { Tags } from '@tryghost/helpers-gatsby'
import "./BlogPostListItem.scss"

const BlogPostListItem = ({ post }) => (
    <article className="blog-post-list-item" >

        <section className="post-full-content">
            {/* Post header */}
            {post.tags && <div className="post-tags"> <Tags post={post} visibility="public" autolink={false} /></div>}
            <div className="post-title">{post.title}</div>
            <div className="post-date">{post.published_at_pretty}</div>

            {/* Feature image */}
            {post.feature_image ?
                <figure className="post-feature-image">
                    <img src={post.feature_image} alt={post.title} />
                </figure> : null}

            {/* Post content */}
            <section
                className="post-body load-external-scripts"
                dangerouslySetInnerHTML={{ __html: post.html }}
            />
        </section>
    </article>
)

export default BlogPostListItem