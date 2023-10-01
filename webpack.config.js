const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist")
    },
    module:{
        rules:[
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              }, 
        ],
        
    },
plugins: [
        new HtmlWebpackPlugin({
            template: 'dist/index.html', // Template path in the 'dist' directory
        }),
        new HtmlWebpackPlugin({
            template: 'dist/contact.html', // Template path in the 'dist' directory
        }),
        new HtmlWebpackPlugin({
            template: 'dist/parks.html', // Template path in the 'dist' directory
        }),
        new HtmlWebpackPlugin({
            template: 'dist/location.html', // Template path in the 'dist' directory
        }),
    ]
};

