import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, Link, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import GlobalStyle from '../../styles/GlobalStyle';
import SiteMetadata from '../site/SiteMetadata';
import Container from './Container';

const ListLink = props => {
    const { to, children } = props;

    return (
        <li style={{ display: `inline-block`, marginRight: `1rem` }}>
            <Link to={to}>{children}</Link>
        </li>
    );
};

const Layout = ({ placeholder, children }) => (
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
            <ThemeProvider theme={theme}>
                <>
                    <SiteMetadata />
                    <GlobalStyle />
                    <Container>
                        {!placeholder && (
                            <header>
                                <Link to="/">
                                    <h3 style={{ display: `inline` }}>
                                        {data.site.siteMetadata.title}
                                    </h3>
                                </Link>
                                <ul style={{ listStyle: `none`, float: `right` }}>
                                    <ListLink to="/">Home</ListLink>
                                    <ListLink to="/about/">About</ListLink>
                                    <ListLink to="/contact/">Contact</ListLink>
                                </ul>
                            </header>
                        )}
                        {children}
                    </Container>
                </>
            </ThemeProvider>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node,
    /** Show / Hide navigation */
    placeholder: PropTypes.bool,
};

Layout.defaultProps = {
    children: null,
    placeholder: false,
};

export default Layout;
