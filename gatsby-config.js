const path = require(`path`)

const config = require(`./src/utils/siteConfig`)
const generateRSSFeed = require(`./src/utils/rss/generate-feed`)

let ghostConfig

try {
  ghostConfig = require(`./.ghost`)
} catch (e) {
  ghostConfig = {
    production: {
      apiUrl: process.env.GHOST_API_URL,
      contentApiKey: process.env.GHOST_CONTENT_API_KEY,
    },
  }
} finally {
  const { apiUrl, contentApiKey } = process.env.NODE_ENV === `development` ? ghostConfig.development : ghostConfig.production

  if (!apiUrl || !contentApiKey || contentApiKey.match(/<key>/)) {
    throw new Error(`GHOST_API_URL and GHOST_CONTENT_API_KEY are required to build. Check the README.`) // eslint-disable-line
  }
}

module.exports = {
  siteMetadata: {
    title: config.siteTitleMeta,
    description: config.siteDescriptionMeta,
    author: config.author,
    siteUrl: config.siteUrl
  },
  plugins: [
    /**
     *  Content Plugins
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `pages`),
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-ghost`,
      options:
        process.env.NODE_ENV === `development`
          ? ghostConfig.development
          : ghostConfig.production,
    },
    /**
         *  Utility Plugins
         */
    {
      resolve: `gatsby-plugin-ghost-manifest`,
      options: {
        short_name: config.shortTitle,
        start_url: `/`,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: `minimal-ui`,
        icon: `static/${config.siteIcon}`,
        legacy: true,
        query: `
              {
                  allGhostSettings {
                      edges {
                          node {
                              title
                              description
                          }
                      }
                  }
              }
            `,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
              {
                  allGhostSettings {
                      edges {
                          node {
                              title
                              description
                          }
                      }
                  }
              }
            `,
        feeds: [
          generateRSSFeed(config),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        query: `
              {
                  allGhostPost {
                      edges {
                          node {
                              id
                              slug
                              updated_at
                              created_at
                              feature_image
                          }
                      }
                  }
                  allGhostPage {
                      edges {
                          node {
                              id
                              slug
                              updated_at
                              created_at
                              feature_image
                          }
                      }
                  }
                  allGhostTag {
                      edges {
                          node {
                              id
                              slug
                              feature_image
                          }
                      }
                  }
                  allGhostAuthor {
                      edges {
                          node {
                              id
                              slug
                              profile_image
                          }
                      }
                  }
              }`,
        mapping: {
          allGhostPost: {
            sitemap: `posts`,
          },
          allGhostTag: {
            sitemap: `tags`,
          },
          allGhostAuthor: {
            sitemap: `authors`,
          },
          allGhostPage: {
            sitemap: `pages`,
          },
        },
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback`,
        ],
        createLinkInHead: true,
        addUncaughtPages: true,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-force-trailing-slashes`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
        postCssPlugins: [require("autoprefixer")()],
      },
    },
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve(`./src/components/Layout.js`)
      }
    },
    // Progressive Web App + Offline functionality: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
