import styled, { css } from 'styled-components';
import typographyTheme from '../styles/typographyTheme';

const Paragraph = styled.p`
    ${props =>
        props.colorValue &&
        css`
            color: ${(props.theme.typography &&
                props.theme.typography.color &&
                props.theme.typography.color[props.colorValue]) ||
                typographyTheme.typography.color[props.colorValue]};
        `}
    font-size: ${props =>
        (props.theme.typography &&
            props.theme.typography.content &&
            props.theme.typography.content.fontSize) ||
        typographyTheme.typography.content.fontSize};
    ${props =>
        props.lead &&
        css`
            font-size: ${(props.theme.typography &&
                props.theme.typography.content &&
                props.theme.typography.content.lead &&
                props.theme.typography.content.lead.fontSize) ||
                typographyTheme.typography.content.lead.fontSize};
            font-weight: ${(props.theme.typography &&
                props.theme.typography.content &&
                props.theme.typography.content.lead &&
                props.theme.typography.content.lead.fontWeight) ||
                typographyTheme.typography.content.lead.fontWeight};
        `}
    margin: 0 0 0.625rem;
`;

export default Paragraph;
