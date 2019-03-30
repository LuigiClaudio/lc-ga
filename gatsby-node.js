const path = require('path');

const { createFilePath } = require(`gatsby-source-filesystem`);

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

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    return graphql(`
        {
            allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
                edges {
                    node {
                        excerpt(pruneLength: 250)
                        html
                        id
                        frontmatter {
                            date
                            title
                            tags
                            templateKey
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        const posts = result.data.allMarkdownRemark.edges;

        const toKebabCase = str =>
            str &&
            str
                .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
                .map(x => x.toLowerCase())
                .join('-');

        const getFromPath = (set, pathToGet) =>
            pathToGet.split('.').reduce((newSet = {}, value) => newSet[value], set);

        posts.forEach(edge => {
            const { id } = edge.node.id;

            createPage({
                path: edge.node.fields.slug,
                tags: edge.node.frontmatter.tags,
                component: path.resolve(
                    `src/templates/${String(edge.node.frontmatter.templateKey)}.js`,
                ),
                context: {
                    // Data passed to context is available
                    // in page queries as GraphQL variables
                    slug: edge.node.fields.slug,
                    id,
                },
            });
        });

        const pathToTags = 'node.frontmatter.tags';

        let tags = [];

        posts.forEach(edge => {
            if (getFromPath(edge, pathToTags)) {
                tags = tags.concat(edge.node.frontmatter.tags);
            }
        });

        const tagList = [...new Set(tags)];

        tagList.forEach(tag => {
            const tagPath = `/tags/${toKebabCase(tag)}`;

            createPage({
                path: tagPath,
                component: path.resolve(`src/templates/tags.js`),
                context: {
                    tag,
                    tagPath,
                },
            });
        });

        return result;
    });
};
