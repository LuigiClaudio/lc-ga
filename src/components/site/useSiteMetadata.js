import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
            query SITE_METADATA_QUERY {
                markdownRemark(frontmatter: { templateKey: { eq: "settingsTemplate" } }) {
                    frontmatter {
                        title
                    }
                }
            }
        `,
    );
    return site.siteMetadata;
};

export default useSiteMetadata;
