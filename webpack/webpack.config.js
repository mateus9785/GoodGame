const path = require("path");

module.exports = {
    entry:{
        index : "./src/index.js"
    },
    output:{
        filename: 'index.js',
        path: path.resolve(__dirname, '../dist')
    }
}