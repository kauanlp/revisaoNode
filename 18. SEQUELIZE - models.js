const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadecadastro', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

// sequelize.authenticate().then(function(){
//     console.log('Conectado com sucesso!')
// }).catch(function(error){
//     console.log('Error: ' + error);
// })

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.TEXT
    },
    telefone: {
        type: Sequelize.TEXT
    }
})

Usuario.create({
    nome: "Kauan",
    email: "kauan-linhares@hotmail.com",
    telefone: "11984098211"
})

Postagem.sync({force: true})