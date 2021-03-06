import React from 'react';
import styled from 'styled-components';
import { H1, H2 } from '@lc-ga/typography';
import useSiteMetadata from '../components/site/useSiteMetadata';
import Layout from '../components/layout/Layout';

const Title = styled(H1)``;
const SubTitle = styled(H2)``;

export default () => {
    const { siteTitle, siteDescription, twitterHandle } = useSiteMetadata();

    return (
        <Layout placeholder>
            <Title>{siteTitle}</Title>
            <SubTitle>{siteDescription}</SubTitle>
            {twitterHandle && (
                <a
                    href={`https://twitter.com/${twitterHandle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    @{twitterHandle}
                </a>
            )}
        </Layout>
    );
};
