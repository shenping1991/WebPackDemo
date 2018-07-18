var webpack = require('webpack');
var path = require('path');

module.exports = function(env) {
    return {
        //entry: './main.js',
        devtool: 'inline-source-map',
        entry:__dirname +'/app/main.js',
        output: {
            //path:__dirname,
            path:__dirname+"/public",
            filename: 'bundle.js'
        },
        devServer: {
            contentBase: "./public",//本地服务器所加载的页面所在的目录
            historyApiFallback: true,//不跳转
            inline: true,//实时刷新
            port:"8081"
        },
        module:{
            loaders:[
                {
                    test:/\.css$/,
                    loader:'style-loader!css-loader'
                },
                {
                    test:/\.(png|svg|jpg|git)$/,
                    loader:'file-loader'
                }
            ]
        },
        plugins: [
            new webpack.BannerPlugin('This file is created by spcat')
            ]
    };
};