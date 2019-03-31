import { graphql } from 'gatsby';

const SettingsPageTemplate = () => {};

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
