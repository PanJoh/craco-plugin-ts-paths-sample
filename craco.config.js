const { createTypescriptPathsPlugin } = require('craco-plugin-ts-paths');
const path = require('path');

console.log('craco config called');

module.exports = {
    plugins: [
        createTypescriptPathsPlugin(path.resolve(__dirname, 'tsconfig.json')),
    ],
};