export default {
    moduleNameMapper: {
        '^~/(.*)$': '<rootDir>/$1',
    },
    moduleFileExtensions: [
        'js',
        'mjs',
        'json'
    ],
    transform: {
        '^.+\\.m?js$': 'babel-jest',
    },
}