/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors:{
                facebook :"#0866FF",
                twitter : "#1D9BF0",
                linkedin : "#0077B5",
                github: "#B10000",
                'text': 'var(--text)',
                'background': 'var(--background)',
                'primary': 'var(--primary)',
                'secondary': 'var(--secondary)',
                'accent': 'var(--accent)',
            },
            screens: {
                'sm': '640px',
                // => @media (min-width: 640px) { ... }
          
                'md': '769px',
                // => @media (min-width: 768px) { ... }
          
                'lg': '1024px',
                // => @media (min-width: 1024px) { ... }
          
                'xl': '1280px',
                // => @media (min-width: 1280px) { ... }
          
                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
              }
        },
    },
    plugins: [],
};
