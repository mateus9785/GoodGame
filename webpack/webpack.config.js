const path = require("path");

const PATHS = {
    src: path.join(__dirname, "../src"),
    build: path.resolve(__dirname, '../dist')
}

module.exports = {
    mode: 'development',
    entry:{
        index : "./src/index.js"
    },
    output:{
        filename: 'index.js',
        path: PATHS.build
    },
    devtool: 'source-map',
    optimization: {
        minimize: false
    }
}