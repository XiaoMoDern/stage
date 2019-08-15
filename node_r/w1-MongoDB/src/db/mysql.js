const mysql = require('mysql');


// 创建连接池
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'test',
    multipleStatements: true
});


// 封装模块
//增删改查  
module.exports = function (sql) {
    //  return 
    return new Promise((resolve, reject) => {
        pool.query(sql, function (error, rows) {
            if (error) {
                rejeect(error)
            }
            resolve(rows);
        });
    })
}