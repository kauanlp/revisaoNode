const Sequelize = require('sequelize')
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

    // Conexao com o banco de dados
    const sequelize = new Sequelize('sistemadecadastro', 'root', 'root', {
        host: 'localhost',
        dialect: 'mysql'
    })

    //Rotas
    app.get('/cad', function(req, res){
        res.render('formulario')
    })

app.listen(8081, function () {
    console.log("on")
})