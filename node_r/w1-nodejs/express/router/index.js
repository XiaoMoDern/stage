// 引入第三方框架
const express = require('express');

// 创建一个中间件
let Router = express.Router();

// 引入其他接口路由
let goodsRouter = require('./goods');
let regRouter = require('./reg');
let corsRouter = require('./cors');
let ProxyRouter = require('./proxy');

// 利用中间件格式化前端传入的参数
Router.use(express.json(), express.urlencoded({
    extended: false
}))

// 当浏览器地址为/goods开头时，进入goodsRouter路由
Router.use('/goods', goodsRouter);
Router.use('/reg', regRouter);

// jsonp实现跨域请求
Router.get('/jsonp', (req, res) => {
    // 从数据库读取数据
    let data = JSON.stringify({
        username: "laoxie",
        password: 123456
    });


    // 接收前端传入的函数名
    let {
        callback
    } = req.query;
    res.send(`${callback}(${data})`)

});


// cors
Router.use('/cors', corsRouter);



// 服务器代理
Router.get('/proxy', ProxyRouter);



// 导出中间件  
module.exports = Router;