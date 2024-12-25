module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                "primary-color": "#12AE85",
                "secondary-color": "#E2FFF7",
                "black-color": "#141414",
                "gray-color": "#888E8D",
            },
            backgroundImage: {
                "login-bg": "url('/src/assets/images/bgLogin.webp')",
            },
        },
    },
    plugins: [],
};
