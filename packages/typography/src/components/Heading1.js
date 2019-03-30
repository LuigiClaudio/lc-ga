import styled from 'styled-components';
import baseHeading from '../styles/typographyStyles';
import typographyTheme from '../styles/typographyTheme';

const Heading1 = styled.h1`
    ${baseHeading}

    font-size: ${props =>
        (props.theme.typography &&
            props.theme.typography.headings &&
            props.theme.typography.headings.fontSize &&
            props.theme.typography.headings.fontSize.h1) ||
        typographyTheme.typography.headings.fontSize.h1};

    font-weight: ${props =>
        (props.theme.typography &&
            props.theme.typography.headings &&
            props.theme.typography.headings.fontWeight &&
            props.theme.typography.headings.fontWeight &&
            props.theme.typography.headings.fontWeight.h1) ||
        typographyTheme.typography.headings.fontWeight.h1};

    margin: 0.5rem 0 0.25rem; 
`;

export default Heading1;
