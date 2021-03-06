const typographyTheme = {
    typography: {
        base: {
            lineHeight: '1.5',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: '1rem',
        },
        headings: {
            fontFamily: 'Trebuchet MS,Tahoma,sans-serif',
            lineHeight: '1.2',
            fontSize: {
                h1: 'calc(2.25rem + 0.5vw)',
                h2: 'calc(1.625rem + 0.5vw)',
                h3: '1.5rem',
                h4: '1.125rem',
                h5: '1rem',
                h6: '0.875rem',
            },
            fontWeight: {
                h1: 700,
                h2: 400,
                h3: 400,
                h4: 700,
                h5: 700,
                h6: 700,
            },
        },
        body: {
            color: '#222222',
            background: 'transparent',
        },
        link: {
            color: '#4285F4',
            hoverColor: '#4285F4',
            decoration: 'none',
            hoverDecoration: 'underline',
        },
        content: {
            fontSize: '1rem',
            fontWeight: 400,
            lead: {
                fontSize: '1.3125rem',
                fontWeight: 300,
            },
        },
        color: {
            dark: '#222222',
            light: '#FFFFFF',
        },
    },
};

export default typographyTheme;
