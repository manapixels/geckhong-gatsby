import React from "react"
import PropTypes from "prop-types"

import { PostCard, Pagination } from '../components'
import { MetaData } from '../components/meta'
import { graphql } from 'gatsby'

// import './blog.scss'


const Blog = ({ data, location, pageContext }) => {

  const posts = data.allGhostPost.edges

  return (
    <>
      <MetaData location={location} />
      <section className="blog-section" id="bodyContent">
        <section className="post-list">
          {posts.map(({ node }) => (
            // The tag below includes the markup for each post - components/PostCard.js
            <article className="content" key={node.id}>
              {node.feature_image ?
                <figure className="post-feature-image">
                  <img src={node.feature_image} alt={node.title} />
                </figure> : null}
              <section className="post-full-content">
                <h1 className="content-title">{node.title}</h1>

                {/* The main post content */}
                <section
                  className="content-body load-external-scripts"
                  dangerouslySetInnerHTML={{ __html: node.html }}
                />
              </section>
            </article>
          ))}
        </section>
        <section className="post-feed">
          {posts.map(({ node }) => (
            // The tag below includes the markup for each post - components/PostCard.js
            <PostCard key={node.id} post={node} />
          ))}
        </section>
        <Pagination pageContext={pageContext} />
      </section>
    </>
  )
}

Blog.propTypes = {
  data: PropTypes.shape({
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.object,
}

export default Blog


// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: $limit,
        skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`