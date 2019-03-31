import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import { H2 } from '../../packages/typography';

const TagRoute = props => {
    const { data, pageContext } = props;
    const { allMarkdownRemark } = data;
    const { edges, totalCount } = allMarkdownRemark;
    const { tag } = pageContext;

    const postLinks = edges.map(post => (
        <li key={post.node.fields.slug}>
            <H2>
                <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
            </H2>
        </li>
    ));

    const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with “${tag}”`;

    return (
        <Layout>
            <section className="section">
                <Helmet title={`${tag}`} />
                <div className="container content">
                    <div className="columns">
                        <div className="column is-10 is-offset-1" style={{ marginBottom: '6rem' }}>
                            <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
                            <ul className="taglist">{postLinks}</ul>
                            <p>
                                <Link to="/tags/">Browse all tags</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

TagRoute.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    data: PropTypes.object.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    pageContext: PropTypes.object.isRequired,
};

TagRoute.defaultProps = {};

export default TagRoute;

export const tagPageQuery = graphql`
    query TagPage($tag: String) {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            limit: 1000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
            totalCount
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`;
