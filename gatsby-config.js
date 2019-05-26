module.exports = {
    plugins: [
        `gatsby-plugin-netlify-cms`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/blog`,
                name: 'markdown-pages',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: 'markdown-pages',
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Site name`,
                short_name: `Site short name`,
                start_url: `/`,
                background_color: `#eeeeee`,
                theme_color: `#bbbbbb`,
                display: `standalone`,
                icon: `src/images/touch-icon.png`,
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
    ],
};
