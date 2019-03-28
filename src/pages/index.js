import React from 'react';
import styled from 'styled-components';
import { useSiteMetadata } from '../../packages/helpers';
import { H1, H2 } from '../../packages/typography';

const Container = styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    height: 100vh;
    justify-content: center;
    padding: 2vh 2vw;
    text-align: center;
    width: 100vw;
`;
const Title = styled(H1)`
    color: rgba(0, 0, 0, 0.4);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0.5rem 0 0.25rem;
`;
const SubTitle = styled(H2)`
    color: rgba(0, 0, 0, 0.4);
    font-size: 1rem;
    font-weight: 300;
    margin: 0.5rem 0;
`;

export default () => {
    const { title, description } = useSiteMetadata();

    return (
        <Container>
            <Title>{title}</Title>
            <SubTitle>{description}</SubTitle>
        </Container>
    );
};
