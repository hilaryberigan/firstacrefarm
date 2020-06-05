module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
        resolve: "gatsby-plugin-web-font-loader",
        options: {
            google: {
              families: ['Sanchez'],
              urls: ["/fonts/fonts.css"],
            },
          },
        },
  ]
};

