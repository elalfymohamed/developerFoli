module.exports = {
  siteMetadata: {
    title: `Resume | Resume of Elalfy Mohamed`,
    description: `I am a Front-End developer with one year of experience working as a JavaScript and React, Gatsby.`,
    author: `@___ALFY`,
  },
  plugins: [
    {
      resolve: "gatsby-source-github",
      options: {
        headers: {
          Authorization: `Bearer `,
        },
        queries: [
          `{
          viewer {
            pinnedItems(first: 6, types: REPOSITORY) {
              nodes {
                ... on Repository {
                  name
                  url
                  description
                  stargazerCount
                  forkCount
                  primaryLanguage {
                    color
                    name
                  }
                  languages {
                    totalSize
                  }
                }
              }
            }
          }
        }`,
        ],
      },
    },

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Resume | Resume of Elalfy Mohamed`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#f6f6f6`,
        theme_color: `#12131d`,
        display: `minimal-ui`,
        icon: `favicon.svg`,
      },
    },

    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    `gatsby-plugin-offline`,

    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Oswald"],
        },
      },
    },
  ],
}
