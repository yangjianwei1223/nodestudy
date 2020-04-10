var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'sql.bgp180.vhostgo.com',
    user: 'yjwdftp',
    password: 'hv5pjmsd',
    database: 'yjwdftp'
});

connection.connect();

// var sql = 'SELECT * FROM websites';
// var addsql = 'INSERT INTO websites(Id, name, url, alexa, country) VALUES(0,?,?,?,?)';
// var addsqlParams = ['菜鸟工具', 'https://c.runoob.com', '23453', 'CN']

var modSql = 'UPDATE websites SET name = ?, url = ? WHERE Id = ?';
var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com', 6]
connection.query(modSql, modSqlParams, function(error, result, fields) {
    if (error) throw error
    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
})
connection.end();