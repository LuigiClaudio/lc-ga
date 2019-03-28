import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';

const BlogTemplate = ({ data }) => {
    // const { markdownRemark } = data;
    // const { frontmatter, html } = markdownRemark;
    const post = data.markdownRemark;

    return (
        <Layout>
            <Helmet title={`${post.frontmatter.title}`} />
            <div>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    );
};

export default BlogTemplate;

BlogTemplate.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`;
