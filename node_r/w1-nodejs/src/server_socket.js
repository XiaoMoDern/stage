// 引入第三方模块express
const express = require('express');
// 引入第三方模块ws
const ws = require('ws');
// 引入内置模块http
const http = require('http');

const {
    PORT
} = require('./config.json');
// 利用http模块把web服务器与websocket服务器合二为一

// 创建静态服务器
const app = express();
// 把读当前目录做静态服务器
app.use(express.static('./'));

// 通过http模块连接web服务器和socket服务器，让其共用一个端口

let server = http.server(app);

// 创建websocket服务器
const socket = new ws.Server({
    server
});

server.listen(PORT, () => {
    // 表示一个console.log变量%s
    console.log('server is running on port %s', PORT);

});


// 监听客户端连接
socket.on('connection', client => {
    // 每个客户端连接服务器会执行一次connection事件，并把每个客户端存放到socket.clients属性中
    // client: 客户端对象

    client.on('message', msg => {
        // 某个客户端发送消息到服务端，就会执行message事件
        console.log(msg);

        // 接收到消息,广播给所有用户
        // socket.clients.forEach(item=>{
        //     item.send(msg)
        // })

        socket.broadcast(msg);

    })
})
// 自定义broadcast（）广播方法
socket.broadcast = msg => {
    // 遍历
    socket.clients.forEach(client => {
        // 服务器主动发消息给客户端
        client.send(msg)
    })
}