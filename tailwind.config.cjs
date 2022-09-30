/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                linear: "linear-gradient(rgba(33,175,206), rgba(68,165,236))",
            },
            colors: {
                background: "#101118",
                divider: "#33354B",
                primary: "#6366F1",
                secondary: "#1E1E2C",
                text_primary: "#FFFFFF",
                text_secondary: "#93A3AD",
                danger: "#FF5B5B",
                light_danger: "rgba(255,148,148,0.12)",
                light_primary: "rgba(129,140,248,0.12)",
            },
        },
        fontFamily: {
            sans: ["Roboto", "sans-serif"],
        },
    },
    plugins: [],
};
