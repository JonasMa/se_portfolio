import type { GatsbyConfig } from 'gatsby';
const { languages, defaultLanguage } = require('./languages');

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Jonas Mattes`,
    siteUrl: `https://jmattes.de`,
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
        path: `./content/`,
        name: `pages`
      }
    }, 
   {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/locales`,
        name: `locale`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        title: `Jonas Mattes`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        languages,
        defaultLanguage,
        siteUrl: `https://jmattes.de`,
        i18nextOptions: {
          debug: true,
          fallbackLng: defaultLanguage,
          supportedLngs: languages,
          defaultNS: 'common',
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          }
        },
      }
    }
  ],
};

export default config;
