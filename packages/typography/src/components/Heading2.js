import styled from 'styled-components';
import baseHeading from '../styles/typographyStyles';
import typographyTheme from '../styles/typographyTheme';

const Heading2 = styled.h2`
    ${baseHeading}

    font-size: ${props =>
        (props.theme.typography &&
            props.theme.typography.headings &&
            props.theme.typography.headings.fontSize &&
            props.theme.typography.headings.fontSize.h2) ||
        typographyTheme.typography.headings.fontSize.h2};
    
    font-weight: ${props =>
        (props.theme.typography &&
            props.theme.typography.headings &&
            props.theme.typography.headings.fontWeight &&
            props.theme.typography.headings.fontWeight &&
            props.theme.typography.headings.fontWeight.h2) ||
        typographyTheme.typography.headings.fontWeight.h2};
    margin: 0.5rem 0;
`;

export default Heading2;
