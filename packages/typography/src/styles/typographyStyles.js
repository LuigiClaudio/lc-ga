import { css } from 'styled-components';
import typographyTheme from './typographyTheme';

const baseHeading = props => css`
    font-family: ${(props.theme.typography &&
        props.theme.typography.headings &&
        props.theme.typography.headings.fontFamily &&
        props.theme.typography.headings.fontFamily) ||
        typographyTheme.typography.headings.fontFamily};

    line-height: ${(props.theme.typography &&
        props.theme.typography.headings &&
        props.theme.typography.headings.lineHeight &&
        props.theme.typography.headings.lineHeight) ||
        typographyTheme.typography.headings.lineHeight};

    ${props.colorValue &&
        css`
            color: ${(props.theme.typography &&
                props.theme.typography.color &&
                props.theme.typography.color[props.colorValue]) ||
                typographyTheme.typography.color[props.colorValue]};
        `}
`;

export default baseHeading;
