1.mkdir>WebPackDemo

2.npm init -y  //package.json
//package.json
"scripts": {
    "webpack": "webpack --config webpack.config.js"
  },

3.type nul>webpack.config.js
//webpack.config.js
var webpack = require('webpack');
var path = require('path');

module.exports = function(env) {
    return {
        entry: './main.js',
        output: {
            filename: 'bundle.js'
        }
    };
};

4.npm install --save-dev webpack@3.11.0

5.npm install webpack-dev-server

6.type nul>index.html
<!-- index.html -->
<html>
<head>
  <meta charset="utf-8">
</head>
<body>
  <script src="bundle.js"></script>
</body>
</html>

7.type nul>entry.js
// entry.js
document.write('It works.')

8.npm run webpack

9.浏览器打开 index.html 已经加载main.js 打包后的 bundle.js 
  页面显示内容 It works

10.加载样式文件 style.css
type nul>style.css
//style.css
body{background:black;color:red;font-size:36px;}

10.1. 修改webpackage.cogfig.js 添加 loaders 
//webpackage.cogfig.js
var webpack = require('webpack');
var path = require('path');

module.exports = function(env) {
    return {
        entry: './main.js',
        output: {
            path:__dirname,//双下划线
            filename: 'bundle.js'
        },
        module:{
            loaders:[
                {test:/\.css$/,loader:'style-loader!css-loader'}
            ]
        }
    };
};

10.2. 简化 entry.js 中的 style.css 加载方式

//entry.js
require('./style.css')
document.write('It works')

10.3. npm run webpack

11. 插件可以完成更多 loader 不能完成的功能。
插件的使用一般是在 webpack 的配置信息 plugins 选项中指定。
//webpack.config.js 添加 plugins  BannerPlugin 内置插件
plugins: [
    new webpack.BannerPlugin('This file is created by sp')//添加注释信息
 ]

11.1 npm run webpack

11.2 打开 bundle.js 文件头部出现了指定的注释信息
//bundle.js
/*! This file is created by sp*/
/******/ (function(modules) { // webpackBootstrap
/******/  // The module cache
/******/  var installedModules = {};
// 后面代码省略

12. 通过参数让编译的输出内容带有进度和颜色
webpack --progress --colors 或者 npm run webpack  --progress --colors

13.监听模式 
webpack --progress --colors --watch 或者 npm run webpack  --progress --colors --watch
 




