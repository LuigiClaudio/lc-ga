import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../../components/layout/Layout';
import { H1, List, ListItem } from '../../../packages/typography';
import { toKebabCase } from '../../../packages/helpers';

const TagsPage = ({
    data: {
        allMarkdownRemark: { group },
    },
}) => {
    return (
        <Layout>
            <Helmet title="Tags" />
            <H1>Tags</H1>
            <List>
                {group.map(tag => (
                    <ListItem key={tag.fieldValue}>
                        <Link to={`/tags/${toKebabCase(tag.fieldValue)}/`}>
                            {tag.fieldValue} ({tag.totalCount})
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Layout>
    );
};

TagsPage.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    data: PropTypes.object.isRequired,
};

export default TagsPage;

export const tagPageQuery = graphql`
    query TagsQuery {
        allMarkdownRemark(limit: 1000) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`;
