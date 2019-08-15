// 引入第三方框架
const express = require('express');

// 创建一个中间件
let Router = express.Router();

var proxy = require('http-proxy-middleware');


// 新浪微博代理
// /proxy/weibo 
let weiboMiddleware = proxy({
    // 要代理的目标服务器
    target: 'http://52.198.113.252',
    // 
    changeOrigin: true,
    pathRewrite: {
        '^/proxy': '/', // 删除路径中多余的字符
    },
})




Router.get('/*', weiboMiddleware)
module.exports = Router;