import React from "react"
import PropTypes from "prop-types"
import { Tags } from '@tryghost/helpers-gatsby'

import { PostCard, TagCard, Pagination } from '../components'
import { MetaData } from '../components/meta'
import { graphql } from 'gatsby'

import './blog.scss'


const Blog = ({ data, location, pageContext }) => {

  const posts = data.allGhostPost.edges
  const tags = data.allGhostTag.edges

  return (
    <>
      <MetaData location={location} />

      <section className="blog-page" id="bodyContent">

        <section className="blog-navigation">
          <h3 className="mt-4">Latest posts</h3>
          {posts.map(({ node }) => (
            <PostCard key={`post-${node.id}`} post={node} />
          ))}
        </section>

        <section className="blog-post-list">
          {posts.map(({ node }) => (
            // The tag below includes the markup for each post - components/PostCard.js
            <article className="blog-post-list-item" key={node.id}>
              {node.feature_image ?
                <figure className="post-feature-image">
                  <img src={node.feature_image} alt={node.title} />
                </figure> : null}
              <section className="post-full-content">
                <div className="post-date">{node.published_at_pretty} <span className="date-tag-separator"></span> {node.tags && <span className="post-card-tags"> <Tags post={node} visibility="public" autolink={false} /></span>}</div>
                <div className="post-title">{node.title}</div>

                {/* The main post content */}
                <section
                  className="post-body load-external-scripts"
                  dangerouslySetInnerHTML={{ __html: node.html }}
                />
              </section>
            </article>
          ))}

          <Pagination pageContext={pageContext} />

        </section>
      </section>
    </>
  )
}

Blog.propTypes = {
  data: PropTypes.shape({
    allGhostPost: PropTypes.object.isRequired,
    allGhostTag: PropTypes.object.isRequired
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
    allGhostTag {
      edges {
        node {
          ...GhostTagFields
        }
      }
    }
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