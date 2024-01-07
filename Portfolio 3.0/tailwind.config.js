/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors:{
                facebook :"#0866FF",
                twitter : "#1D9BF0",
                linkedin : "#0077B5",
                github: "#B10000"
            }
        },
    },
    plugins: [],
};
