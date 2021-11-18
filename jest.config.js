export default {
    // Allow for module look like `~/data/models/Book.js` in test files
    moduleNameMapper: {
        '^~/(.*)$': '<rootDir>/$1',
    },
    moduleFileExtensions: [
        'js',
        'mjs',
        'json'
    ],
    // Apply babel-jest to test files
    transform: {
        '^.+\\.m?js$': 'babel-jest',
    },
}