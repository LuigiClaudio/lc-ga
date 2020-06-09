import styled from 'styled-components';
import baseHeading from '../styles/typographyStyles';
import typographyTheme from '../styles/typographyTheme';

const Heading3 = styled.h3`
    ${baseHeading}

    font-size: ${props =>
        (props.theme.typography &&
            props.theme.typography.headings &&
            props.theme.typography.headings.fontSize &&
            props.theme.typography.headings.fontSize.h3) ||
        typographyTheme.typography.headings.fontSize.h3};
    
    font-weight: ${props =>
        (props.theme.typography &&
            props.theme.typography.headings &&
            props.theme.typography.headings.fontWeight &&
            props.theme.typography.headings.fontWeight &&
            props.theme.typography.headings.fontWeight.h3) ||
        typographyTheme.typography.headings.fontWeight.h3}; 
    margin: 1.25rem 0 0.625rem;
`;

export default Heading3;
