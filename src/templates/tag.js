import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import { BlogPostListItem, PostCard, Pagination, TagCard } from '../components/blog'
import { MetaData } from '../components/blog/meta'
import "./blog.scss"

/**
* Tag page (/tag/:slug)
*
* Loads all posts for the requested tag incl. pagination.
*
*/
const Tag = ({ data, location, pageContext }) => {

    const tag = data.ghostTag
    const tags = data.allGhostTag.edges
    const posts = data.allGhostPost.edges

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="series"
            />
            <div className="blog-page">

                <section className="blog-navigation">
                    <h1>{tag.name}</h1>

                    {tag.description ? <p>{tag.description}</p> : null}
                    <h3 className="mt-4">Category</h3>
                    <div>
                        {tags.map(({ node }) => (
                            <TagCard key={`tag-${node.id}`} tag={node} location={location} />
                        ))}
                    </div>

                    <div style={{marginTop: '1rem'}}>
                        <Link to="/blog" style={{fontSize: '95%', color: 'var(--blue)', borderColor: 'var(--blue)'}}>Clear</Link>
                    </div>


                    <h3 className="mt-4">Recent posts in {tag.name}</h3>
                    {posts.map(({ node }) => (
                        <PostCard key={`post-${node.id}`} post={node} />
                    ))}
                </section>

                <section className="blog-post-list">
                    {posts.map(({ node }) => (
                        <BlogPostListItem key={node.id} post={node} />
                    ))}

                    <Pagination pageContext={pageContext} />

                </section>
            </div>
        </>
    )
}

Tag.propTypes = {
    data: PropTypes.shape({
        ghostTag: PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
        }),
        allGhostTag: PropTypes.object.isRequired,
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Tag

export const pageQuery = graphql`
    query GhostTagQuery($slug: String!, $limit: Int!, $skip: Int!) {
        ghostTag(slug: { eq: $slug }) {
            ...GhostTagFields
        }
        allGhostTag {
            edges {
              node {
                ...GhostTagFields
              }
            }
          }
        allGhostPost(
            sort: { order: DESC, fields: [published_at] },
            filter: {tags: {elemMatch: {slug: {eq: $slug}}}},
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
