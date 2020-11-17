module.exports = {
  siteMetadata: {
    title: 'El Pinar Del Mar, Aguas Verdes',
    description:
      'Alquileres Temporarios de Casas, Cabañas y Departamentos en Costa Atlántica, Buenos Aires. Trato directo con dueños y sin pagar comisiones.',
    address: 'Avenida 1 73, B7112 Aguas Verdes, Provincia de Buenos Aires',
    siteUrl: process.env.SITE_URL,
    gmap:
      'https://www.google.com/maps/place/El+Pinar+Del+Mar/@-36.6408077,-56.6858634,18z',
    phone: '54-2257-462146',
    phoneHref: '542257462146',
    email: 'consultas@elpinardelmar.com.ar',
    author: 'Facundo Cachan',
    facebook: 'https://www.facebook.com/ElPinarDelMar/',
    instagram: 'https://www.instagram.com/el_pinar_del_mar/',
    twitter: 'https://twitter.com/pinar_mar',
  },
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'uploads',
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/img`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-react-helmet-canonical-urls',
      options: {
        siteUrl: process.env.SITE_URL,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'El Pinar Del Mar',
        short_name: 'El Pinar',
        start_url: '/',
        background_color: '#000',
        theme_color: '#000',
        display: 'standalone',
      },
    },
    'gatsby-plugin-advanced-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
