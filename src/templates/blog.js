import React from "react"
import PropTypes from "prop-types"

import { PostCard, Pagination, TagCard, BlogPostListItem } from '../components/blog'
import { MetaData } from '../components/blog/meta'
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
          <div className="blog-navigation-section">
            <h3 className="blog-navigation-section-title">Category</h3>
            {tags.map(({ node }) => (
              <TagCard key={`tag-${node.id}`} tag={node} location={location} />
            ))}
          </div>
          <div className="blog-navigation-section">
            <h3 className="blog-navigation-section-title">Recent posts</h3>
            {posts.map(({ node }) => (
              <PostCard key={`post-${node.id}`} post={node} />
            ))}
          </div>
        </section>

        <section className="blog-post-list">
          {posts.map(({ node }) => (
            <BlogPostListItem key={node.id} post={node} />
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