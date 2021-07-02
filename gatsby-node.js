/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~components': path.resolve(__dirname, 'src/components'),
        // '~containers': path.resolve(__dirname, 'src/containers'),
        '~styles': path.resolve(__dirname, 'src/styles'),
        '~img': path.resolve(__dirname, 'src/assets/img'),
        '~fonts': path.resolve(__dirname, 'src/assets/fonts'),
        '~images': path.resolve(__dirname, 'src/images'),
      },
    },
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Article`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `id`,
      value: id,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  // const { createPage } = actions
  const { data } = await graphql(`
    query {
      allDatoCmsArticle {
        nodes {
          id
          date
          title
        }
      }
    }
  `)
  data.allDatoCmsArticle.nodes.forEach((node) => {
    actions.createPage({
      path: '/content/' + node.id,
      component: path.resolve(`./src/templates/single.js`),
      context: {
        id: node.id,
      },
    })
  })
}
