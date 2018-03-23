module.exports = {
    plugins: [
      'gatsby-plugin-resolve-src',
      'gatsby-plugin-less',
      {
        resolve: `gatsby-plugin-favicon`,
        options: {
          logo: "favicon.png",
          injectHTML: true,
          icons: {
            android: true,
            appleIcon: true,
            appleStartup: true,
            coast: false,
            favicons: true,
            firefox: true,
            twitter: false,
            yandex: false,
            windows: false
          }
        }
      }
    ]
  }