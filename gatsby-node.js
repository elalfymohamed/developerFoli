const path = require("path")

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const products = require("./src/data/products.json")
  products.forEach(product => {
    createPage({
      path: `/product/${product.id}`,
      component: require.resolve("./src/templates/product.js"),
      context: product,
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}
