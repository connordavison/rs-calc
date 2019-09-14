const path = require('path');

module.exports = {
    entry: './src/container.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            app: path.resolve(__dirname, 'src/'),
        },
    },
};
