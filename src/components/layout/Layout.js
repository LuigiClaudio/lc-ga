import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';
import SiteMetadata from '../site/SiteMetadata';

const ListLink = props => {
    const { to, children } = props;

    return (
        <li style={{ display: `inline-block`, marginRight: `1rem` }}>
            <Link to={to}>{children}</Link>
        </li>
    );
};

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <>
                <SiteMetadata />
                <div
                    style={{
                        margin: `3rem auto`,
                        maxWidth: 650,
                        padding: `0 1rem`,
                    }}
                >
                    <header style={{ marginBottom: `1.5rem` }}>
                        <Link
                            to="/"
                            style={{
                                textShadow: `none`,
                                backgroundImage: `none`,
                            }}
                        >
                            <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
                        </Link>
                        <ul style={{ listStyle: `none`, float: `right` }}>
                            <ListLink to="/">Home</ListLink>
                            <ListLink to="/about/">About</ListLink>
                            <ListLink to="/contact/">Contact</ListLink>
                        </ul>
                    </header>
                    {children}
                </div>
            </>
        )}
    />
);

export default Layout;
