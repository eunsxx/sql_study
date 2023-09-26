var mysql = require('mysql');
var connection = mysql.createConnection({
    connectionLimit: 5,
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'tutorial'
});

module.exports={getList(callback){
    connection.query('SELECT idx, creator_id, title, hit FROM board', (err, rows, fileds)=>{
        if(err) throw err;
        callback(rows);
        });
    }
}