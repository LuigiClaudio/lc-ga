import React from 'react';
import styled from 'styled-components';
import useSiteMetadata from '../components/site/useSiteMetadata';
import { H1, H2 } from '../../packages/typography';
import Layout from '../components/layout/Layout';

const Container = styled.div`
    align-items: flex-start;
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    height: 100vh;
    justify-content: center;
    padding: 2vh 10vw;
    width: 100vw;
`;
const Title = styled(H1)``;
const SubTitle = styled(H2)``;

export default () => {
    const { title, description, twitter } = useSiteMetadata();

    return (
        <Layout placeholder>
            <Container>
                <Title>{title}</Title>
                <SubTitle>{description}</SubTitle>
                <a
                    href="https://twitter.com/LuigiClaudio"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {twitter}
                </a>
            </Container>
        </Layout>
    );
};
