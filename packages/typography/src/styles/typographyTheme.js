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
                h1: '2.25rem',
                h2: '1.875rem',
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
            color: '#1f3143',
            background: 'transparent',
        },
        link: {
            color: '#1A9DDD',
            hoverColor: '#136c97',
            decoration: 'none',
            hoverDecoration: 'underline',
        },
        content: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lead: {
                fontSize: '1.3125rem',
                fontWeight: 300,
            },
        },
        color: {
            primary: '#1A9DDD',
            secondary: '#FFA300',
            default: '#1f3143',
            white: '#FFFFFF',
        },
    },
};

export default typographyTheme;
