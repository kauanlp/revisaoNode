const express = require('express');
const app = express();

app.get("/", function (req, res) {
    res.send("Seja bem vindo ao meu programa!")
});

app.get("/sobre", function (req, res) {
    res.send("Pagina SOBRE");
});

app.get("/blog", function (req, res) {
    res.send("Bem vindo ao BLOG");
});

app.get("/ola/:nome/:cargo", function (req, res) {
    res.send("<h1>Ola " + req.params.nome + "</h1>" +
        "<h2>Seu cargo é " + req.params.cargo + "</h2>"
    );
});

app.listen(8081, function () {
    console.log('Servidor ON');
});