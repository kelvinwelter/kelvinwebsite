module.exports = {
  siteMetadata: {
    siteUrl: "https://www.kelvinwelter.com",
    title: "kelvin's site",
  },
  plugins: [
    "gatsby-plugin-mdx",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      }
    },
    {
      resolve: `gatsby-plugin-umami`,
      options: {
        websiteId: 'aebcbc83-6685-4ea3-a1c2-6ac7db63bffa',
        srcUrl: 'https://umami-indol-zeta.vercel.app/umami.js',
        includeInDevelopment: false,
        autoTrack: true,
        respectDoNotTrack: true
      },
    },
  ],
};
