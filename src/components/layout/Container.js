import styled from 'styled-components';
import { typographyTheme } from '../../../packages/typography';

const Container = styled.div`
    align-items: flex-start;

    background-color: ${props =>
        props.bgColor ||
        ((props.theme.typgrography &&
            props.theme.typgrography.body &&
            props.theme.typgrography.body.background) ||
            typographyTheme.typography.body.background)};

    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    height: 100vh;
    justify-content: center;
    padding: 2vh 10vw;
    width: 100vw;
`;

export default Container;
