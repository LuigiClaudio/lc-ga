module.exports = {
    siteMetadata: {
        title: 'Luigi Claudio',
        description: 'Senior Front-end / WEB UI Developer and UX Designer',
    },
    plugins: [
        `gatsby-plugin-netlify-cms`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/blog`,
                name: 'markdown-pages',
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
    ],
};
