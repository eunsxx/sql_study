var mysql = require('mysql');
var connection = mysql.createConnection({
    connectionLimit: 5,
     host: 'localhost',
     user: 'root',
     password: '1234',
     database: 'tutorial'
});

exports.getData=(idx, callback)=> {
    connection.query('SELECT idx, creator_id, title, content FROM board WHERE idx=?;', idx, (err, row, fileds)=>{
        if(err) throw err;
        callback(row);
    });
}

exports.updateData=(datas, callback)=> {
    var sql = "UPDATE board SET creator_id=?, title=?, content=? WHERE idx=? AND passwd=?";
    connection.query(sql, datas, function(err, result){
        if(err) console.error("글 수정 중 에러 발생 err: " + err);
        callback(result);
    });
}