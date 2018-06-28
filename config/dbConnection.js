var mysql = require('mysql');

var ConnMySQL = function(){
return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'portal_noticias'
    });
}
module.exports =function(){
    return ConnMySQL;
}