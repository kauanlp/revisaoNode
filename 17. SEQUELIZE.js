const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadecadastro', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso!')
}).catch(function(error){
    console.log('Error: ' + error);
})