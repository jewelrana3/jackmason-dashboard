/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                textGray: '#B8B8B8E5',
                placeholder: '#B8B8B8E5',
                textCategory: '#ABABAB',
                textGolden: '#DBCC93',
                textBuyer: '#3A99D9',
            },
            backgroundColor: {
                bgWhite: '#FEFEFE',
                bgBlack: '#212526',
            },

            borderColor: {
                borderGray: '#B8B8B8',
                borderGolden: '#E7DDB7',
            },
        },
    },
    plugins: [],
};
