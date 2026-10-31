export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            globals: {
                document: 'readonly'
            }
        },
        rules: {
            'no-unused-vars': 'error',
            'no-undef': 'error',
            'no-console': 'warn'
        }
    }
];