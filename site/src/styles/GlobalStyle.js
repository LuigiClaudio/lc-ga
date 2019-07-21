import reboot from 'styled-reboot';
import { createGlobalStyle } from 'styled-components';
import { typographyTheme } from '@lc-ga/typography';

const globalOptions = {
    fontFamilyBase: props =>
        (props.theme.typography &&
            props.theme.typography.base &&
            props.theme.typography.base.fontFamily) ||
        typographyTheme.typography.base.fontFamily,
    linkColor: props =>
        (props.theme.typography &&
            props.theme.typography.base &&
            props.theme.typography.link.color) ||
        typographyTheme.typography.link.color,
    linkDecoration: props =>
        (props.theme.typography &&
            props.theme.typography.base &&
            props.theme.typography.link.decoration) ||
        typographyTheme.typography.link.decoration,
    linkHoverColor: props =>
        (props.theme.typography &&
            props.theme.typography.base &&
            props.theme.typography.link.hoverColor) ||
        typographyTheme.typography.link.hoverColor,
    linkHoverDecoration: props =>
        (props.theme.typography &&
            props.theme.typography.base &&
            props.theme.typography.link.hoverDecoration) ||
        typographyTheme.typography.link.hoverDecoration,
    bodyColor: props =>
        (props.theme.typography &&
            props.theme.typography.base &&
            props.theme.typography.body.color) ||
        typographyTheme.typography.body.color,
    bodyBg: props =>
        (props.theme.typography &&
            props.theme.typography.base &&
            props.theme.typography.body.background) ||
        typographyTheme.typography.body.background,
    fontSizeBase: props =>
        (props.theme.typography &&
            props.theme.typography.base &&
            props.theme.typography.base.fontSize) ||
        typographyTheme.typography.base.fontSize,
    lineHeightBase: props =>
        (props.theme.typography &&
            props.theme.typography.base &&
            props.theme.typography.base.lineHeight) ||
        typographyTheme.typography.base.lineHeight,
};

const rebootThemed = reboot(globalOptions);

const GlobalStyle = createGlobalStyle`
    ${rebootThemed}
`;

export default GlobalStyle;
