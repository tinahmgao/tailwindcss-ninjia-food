module.exports = {
    mode: 'jit',
    // These paths are just examples, customize them to match your project structure
    purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
    theme: {
        extend: {
            // custom colors
            colors: {
                primary: '#ff6363',
                secondary: {
                    100: '#e2e2d5',
                    200: '#888883',
                },
            },

            // custom font family
            fontFamily: {
                body: ['Nunito'],
            },

            // custom breakpoints
            screens: {
                tablet: '640px',
                // => @media (min-width: 640px) { ... }

                laptop: '1024px',
                // => @media (min-width: 1024px) { ... }

                desktop: '1280px',
                // => @media (min-width: 1280px) { ... }
            },
        },
    },
    plugins: [],
};
