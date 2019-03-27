import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';

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
const Title = styled.h1`
    font-size: 1.25rem;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0.5rem 0;
`;
const SubTitle = styled.h2`
    font-size: 1rem;
    font-weight: 300;
    margin: 0.5rem 0;
`;

export default () => {
    return (
        <Container>
            <GlobalStyle />
            <Title>Luigi Claudio</Title>
            <SubTitle>Senior Front-end / WEB UI Developer and UX Designer</SubTitle>
        </Container>
    );
};
