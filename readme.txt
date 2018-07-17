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

9.������� index.html �Ѿ�����main.js ������ bundle.js 
  ҳ����ʾ���� It works

10.������ʽ�ļ� style.css
type nul>style.css
//style.css
body{background:black;color:red;font-size:36px;}

10.1. �޸�webpackage.cogfig.js ��� loaders 
//webpackage.cogfig.js
var webpack = require('webpack');
var path = require('path');

module.exports = function(env) {
    return {
        entry: './main.js',
        output: {
            path:__dirname,//˫�»���
            filename: 'bundle.js'
        },
        module:{
            loaders:[
                {test:/\.css$/,loader:'style-loader!css-loader'}
            ]
        }
    };
};

10.2. �� entry.js �е� style.css ���ط�ʽ

//entry.js
require('./style.css')
document.write('It works')

10.3. npm run webpack

11. ���������ɸ��� loader ������ɵĹ��ܡ�
�����ʹ��һ������ webpack ��������Ϣ plugins ѡ����ָ����
//webpack.config.js ��� plugins  BannerPlugin ���ò��
plugins: [
    new webpack.BannerPlugin('This file is created by sp')//���ע����Ϣ
 ]

11.1 npm run webpack

11.2 �� bundle.js �ļ�ͷ��������ָ����ע����Ϣ
//bundle.js
/*! This file is created by sp*/
/******/ (function(modules) { // webpackBootstrap
/******/  // The module cache
/******/  var installedModules = {};
// �������ʡ��

12. ͨ�������ñ����������ݴ��н��Ⱥ���ɫ
webpack --progress --colors ���� npm run webpack  --progress --colors

13.����ģʽ 
webpack --progress --colors --watch ���� npm run webpack  --progress --colors --watch
 




