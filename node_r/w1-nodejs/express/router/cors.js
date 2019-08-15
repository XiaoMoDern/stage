// 引入第三方框架
const express = require('express');

// 创建一个中间件
let Router = express.Router();

Router.get('/',(req,res)=>{
    res.send('get cors');
})

module.exports=Router;