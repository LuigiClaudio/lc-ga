import React from 'react';
import { graphql } from 'gatsby';

const SettingsPageTemplate = ({ title }) => {
    return <span>{title}</span>;
};

export default SettingsPageTemplate;

export const pageQuery = graphql`
    query SettingsPage {
        markdownRemark(frontmatter: { templateKey: { eq: "settingsTemplate" } }) {
            frontmatter {
                title
            }
        }
    }
`;
