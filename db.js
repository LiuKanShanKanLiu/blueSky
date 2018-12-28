const mysql = require('mysql');
let db = {};
db.query = function sqlback(sqllan, fn) {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'mydb',
        port: 3306
    });
    connection.connect(function (err) {
        if (err) {
            console.error(err);
            return;
        }
    });
    const sql = sqllan;
    if (!sql) {
        return;
    }
    connection.query(sql, function (err, rows, fields) {
        if (err) {
            console.log(err);
            return;
        }
        fn(rows);
    });
    connection.end(function (err) {
        if (err) {
            console.error(err);
            return;
        } else {
            console.log('连接关闭');
        }
    })

}