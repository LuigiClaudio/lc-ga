import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
            query SITE_METADATA_QUERY {
                site {
                    siteMetadata {
                        title
                        description
                        twitter
                    }
                }
            }
        `,
    );
    return site.siteMetadata;
};

export default useSiteMetadata;

// markdownRemark(frontmatter: { templateKey: { eq: "settingsTemplate" } }) {
//     frontmatter {
//         title
//     }
// }
