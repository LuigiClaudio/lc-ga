module.exports = {
    siteMetadata: {
        title: 'Luigi Claudio',
        description: 'Senior Front-end / WEB UI Developer and UX Designer',
        siteUrl: `https://luigiclaudio.com`,
        twitter: `@luigiclaudio`,
    },
    plugins: [
        `gatsby-plugin-netlify-cms`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/pages/blog`,
                name: 'markdown-pages',
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
    ],
};
