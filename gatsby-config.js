module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: 'Commonwealth',
    description: `Description`,
    domain: '*.min.studio',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-minify-classnames`,
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: true, // Print removed selectors and processed file names
    //     develop: true, // Enable while using `gatsby develop`
    //     // tailwind: true, // Enable tailwindcss support
    //     // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
    //     // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
    //     // purgeCSSPaths: ['./node_modules/react-bootstrap/**/*.js'],
    //     purgeCSSOptions: {
    //       // https://purgecss.com/configuration.html#options
    //       safelist: {
    //         standard: ['container', /dropdown$/, /nav$/, /btn$/],
    //       }, // Don't remove this selector
    //     },
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    // `gatsby-source-graphql`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        footnotes: true,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/data/images`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-svgr-svgo`,
      options: {
        urlSvgOptions: [
          {
            test: /\.svg$/,
            svgoConfig: {
              plugins: [
                {
                  cleanupIDs: false,
                },
              ],
            },
            urlLoaderOptions: {
              limit: 10,
            },
          },
        ],
      },
    },

    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `ba8f3975fa0fdfa9358789899a338a`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
