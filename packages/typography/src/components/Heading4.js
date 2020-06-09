import styled from 'styled-components';
import baseHeading from '../styles/typographyStyles';
import typographyTheme from '../styles/typographyTheme';

const Heading4 = styled.h4`
    ${baseHeading}

    font-size: ${props =>
        (props.theme.typography &&
            props.theme.typography.headings &&
            props.theme.typography.headings.fontSize &&
            props.theme.typography.headings.fontSize.h4) ||
        typographyTheme.typography.headings.fontSize.h4};
    
    font-weight: ${props =>
        (props.theme.typography &&
            props.theme.typography.headings &&
            props.theme.typography.headings.fontWeight &&
            props.theme.typography.headings.fontWeight &&
            props.theme.typography.headings.fontWeight.h4) ||
        typographyTheme.typography.headings.fontWeight.h4}; 
    margin: 0.625rem 0;
`;

export default Heading4;
