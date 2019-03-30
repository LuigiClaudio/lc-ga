import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
// import favIcon from '../images/favIcon.ico';

const SiteMetadata = ({ pathname }) => {
    return (
        <StaticQuery
            query={graphql`
                query SiteMetadata {
                    site {
                        siteMetadata {
                            siteUrl
                            title
                            twitter
                        }
                    }
                }
            `}
            render={({
                site: {
                    siteMetadata: { siteUrl, title, twitter },
                },
            }) => (
                <Helmet
                    defaultTitle={title}
                    titleTemplate={`%s | ${title}`}
                    // onChangeClientState={(newState, addedTags, removedTags) =>
                    //     // console.log(newState, addedTags, removedTags)
                    // }
                >
                    <html lang="en" amp />
                    <link rel="canonical" href={`${siteUrl}${location.pathname}`} />
                    <meta name="docsearch:version" content="2.0" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
                    />
                    <meta property="og:url" content={siteUrl} />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en" />
                    <meta property="og:site_name" content={title} />
                    {/* <meta property="og:image" content={`${siteUrl}${favIcon}`} /> */}
                    <meta property="og:image:width" content="512" />
                    <meta property="og:image:height" content="512" />

                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content={twitter} />
                </Helmet>
            )}
        />
    );
};

export default SiteMetadata;
