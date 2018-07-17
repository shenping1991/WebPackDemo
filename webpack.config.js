var webpack = require('webpack');
var path = require('path');

module.exports = function(env) {
    return {
        entry: './main.js',
        output: {
            path:__dirname,
            filename: 'bundle.js'
        },
        module:{
            loaders:[
                {test:/\.css$/,loader:'style-loader!css-loader'}
            ]
        },
        plugins: [
            new webpack.BannerPlugin('This file is created by spcat')
            ]
    };
};