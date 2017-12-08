# React 16.0.0 + Antd 3.0.0 + Webpack 3.8.1 脚手架

## 1 技术栈

**React 全家桶**
* react 16.0.0 （React核心）  
* react-dom 16.0.0 （React渲染）        
* react-router-dom 4.2.2 （路由）
* redux 3.7.2 （数据层）
* prop-types 15.6.0 （React 15.3.0 独立出来的props类型检查）
* react-mixin 4.0.0 （功能共享）

**UI 组件**
* antd 3.0.0 （蚂蚁金服出品 UI 组件）

**webpack 技术栈**
* webpack 3.8.1 （打包）
* webpack-dev-server 2.9.4 （测试服务器）
* babel-loader 7.1.2 （webpack连接babel）
* css-loader 0.28.7 （处理css）
* style-loader: 0.19.0 （处理css）
* url-loader 0.6.2 （处理图片、字体）
* file-loader 1.1.5 （处理图片、字体）
* postcss-loader 2.0.8 （预处理css）
* autoprefixer 7.1.6 （postcss的功能）
* html-webpack-plugin （根据模板自动生成 index.html）
* extrac-text-webpack-plugin 3.0.2（css文件单独打包）
* open-browser-webpack-plugin 0.0.5 （启动服务器时自动打开浏览器）

**babel 相关**
* babel-core 6.26.0 （babel核心）
* babel-preset-env 1.6.0 （规则集，包括ES2015-ES2017等）
* babel-preset-react 6.24.1 （babel处理react）
* babel-preset-stage-0 （尚未正式发布的 ES 规则集）
* babel-plugin-transform-class-properties 6.24.1 （ES7中新增的class增强功能）
* babel-plugin-transform-object-rest-spread 6.26.0 （对象扩展等）
* babel-plugin-import 1.6.2（按需加载 antd）
* babel-plugin-transform-runtime 6.23.0 （按需加载 antd 的沙盒）
* babel-plugin-react-html-attrs 2.1.0 （React中className可以写成class）

**其他**
* rimraf 2.6.2 （删除系统目录）

## 2 项目目录结构

```
.
├── .babelrc
├── .gitignore
├── README.md
├── node_modules
│   ├── abbrev
├── package.json
├── src
│   ├── App.js
│   ├── components
│   ├── css
│   ├── data.py
│   ├── index.js
│   └── template.html
├── webpack.config.js
└── yarn.lock
```

