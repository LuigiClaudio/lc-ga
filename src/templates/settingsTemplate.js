import React from 'react';
import { graphql } from 'gatsby';

const SettingsPageTemplate = ({ data }) => {
    const post = data.markdownRemark;
    console.log(data);
    return <span>{post.frontmatter.title}</span>;
};

export default SettingsPageTemplate;

export const pageQuery = graphql`
    query {
        markdownRemark(frontmatter: { templateKey: { eq: "settingsTemplate" } }) {
            frontmatter {
                siteTitle
            }
        }
    }
`;
