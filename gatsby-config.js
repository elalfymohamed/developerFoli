module.exports = {
  siteMetadata: {
    title: `Resume | Resume of Elalfy Mohamed`,
    description: `I am a Front-End developer with two years of experience working as a JavaScript and (ReactJs,VueJs,
      GatsbyJs, NextJs).`,
    author: `@___ALFY`,
    siteUrl: `https://elalfymohamed.netlify.app`,
  },
  plugins: [
    "gatsby-plugin-sass",
    // "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-offline`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `Bearer {}`, // -> KEY GITHUB
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-YEE98S84BM",
        head: true,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Resume | Resume of Elalfy Mohamed`,
        short_name: `portfolio.Elalfy`,
        // start_url: `https://elalfymohamed.netlify.app/`,
        background_color: `#f6f6f6`,
        theme_color: `#12131d`,
        display: `minimal-ui`,
        icon: `./src/assets/icon/favicon.svg`,
      },
    },

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
      resolve: `gatsby-plugin-emotion`,
      options: {
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
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
