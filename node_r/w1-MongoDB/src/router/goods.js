const expres = require('express');

const Router = expres.Router();

const mysql = require('../db/mysql')

// 商品的增删改查
Router.post('/', (req, res) => {
    // post请求参数：req.body
    let {
        id,
        title,
        price
    } = req.body;

    mysql(`insert into txt( id,title,price) values('${id}','${title}','${price}')`).then((data) => {
        res.send(data);
    })
});


Router.route('/:id')
    .delete((req, res) => {
        let {
            id
        } = req.params;

        mysql(`delete from txt where id=${id}`).then((data) => {
            res.send(data);
        })
    })

    .patch((req, res) => {
        let {
            id
        } = req.params;

        let {
            price
        } = req.body;
        mysql(`update txt set price=${price} where id=${id}`).then((data) => {
            res.send(data);
        })
    })

    .get((req, res) => {
        let {
            id
        } = req.params;
        mysql(`select * from txt where id=${id}`).then((data) => {
            res.send(data);
        })
    })

module.exports = Router;