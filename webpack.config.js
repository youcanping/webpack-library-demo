const pkg  = require('./package');
const path = require('path');

module.exports = (env, argv) => {
    return {
        entry: {
            [pkg.main]: path.join(__dirname, "src/index.js")
        },
        output: {
            path: __dirname,
            filename: '[name]',
            // library: 'ycpLib',
            // globalObject: 'this',
            // umdNamedDefine: true,
            libraryTarget: 'ES2015'
        },
        module: {
            // rules: [
            //     {
            //         test: /\.js$/,
            //         loader: 'babel-loader',
            //         exclude: /node_modules/
            //     }
            // ]
        }
    }
};