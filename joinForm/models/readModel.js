var mysql = require('mysql');
var connection = mysql.createConnection({
    connecionLimit: 5,
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'tutorial'
});

module.exports={getData(idx, callback){
    connection.query('SELECT idx, creator_id, title, content, hit FROM board WHERE idx=?', idx, (err, row, fileds)=>{
        if(err) throw err;
        callback(row);
    });
}}