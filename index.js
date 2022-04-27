const mysql = require('mysql2');

const con = mysql.createConnection({
    host:'localhost',
    user:'lucas',
    password: '12345',
    database: 'bd_escola'

});

con.connect(function(err){
    if(err) throw err;
    console.log('Connected');

    con.query("DELETE FROM aluno WHERE idAluno = 1", function(err, rows, fiels){
        if (!err){
            console.log('Resultado: ', rows);
        }else{
            console.log('Erro ao realizar a consulta');
        }
    })

});
