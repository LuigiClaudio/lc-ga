import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
    const { markdownRemark } = useStaticQuery(
        graphql`
            query SiteSettings {
                markdownRemark(frontmatter: { templateKey: { eq: "settingsTemplate" } }) {
                    frontmatter {
                        siteTitle
                        siteUrl
                        siteDescription
                        twitterHandle
                    }
                }
            }
        `,
    );
    return markdownRemark.frontmatter;
};

export default useSiteMetadata;
