import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Jonas Mattes`,
    siteUrl: `https://jmattes.de`,
    description: `Welcome to the digital portfolio of Jonas Mattes, a seasoned web developer with a penchant for crafting state-of-the-art, responsive, and robust web experiences. With a background at Google and a passion for user-centered design, Jonas specializes in creating beautiful, functional, and accessible websites that prioritize user experience. Explore Jonas's journey into web development and discover how he brings together design and functionality to create digital experiences that delight users`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-transformer-json', // 'gatsby-plugin-webpack-bundle-analyser-v2', // Uncomment for to see webpack bundle info after build
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './content/',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        title: `Jonas Mattes`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};

export default config;
