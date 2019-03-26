const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const blogPostPath = './src/templates/blogTemplate.js';

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` });

        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });
    }
};

exports.createPages = ({ graphql, actions }) => {
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const { createPage } = actions;

    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then(result => {
        result.data.allMarkdownRemark.edges.map(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve(`${blogPostPath}`),
                context: {
                    // Data passed to context is available
                    // in page queries as GraphQL variables
                    slug: node.fields.slug,
                },
            });
        });
    });
};
