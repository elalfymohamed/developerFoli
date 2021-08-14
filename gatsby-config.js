

module.exports = {
  siteMetadata: {
    title: `Resume `,
    description: `I am a Front-End developer with one year of experience working as a JavaScript and React, Gatsby.`,
    author: ``,
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `Bearer  ${} ` //KEY_API_GITHUB,
        },
        fetchOptions: {},
      },
    },
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Resume `,
        short_name: `starter`,
        start_url: `https://resume-of-elalfy.netlify.app/`,
        background_color: `#f6f6f6`,
        theme_color: `#12131d`,
        display: `minimal-ui`,
        icon: `./src/assets/icon/favicon.svg`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: "./src/assets/",
      },
      __key: "assets",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: "./src/assets/pdf",
      },
      __key: "assets",
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
