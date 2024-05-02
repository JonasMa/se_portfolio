import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Jonas Mattes`,
    siteUrl: `https://jmattes.de`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ['gatsby-plugin-postcss','gatsby-transformer-json', // 'gatsby-plugin-webpack-bundle-analyser-v2', // Uncomment for to see webpack bundle info after build 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: './content/',
    },
  },],
};

export default config;
