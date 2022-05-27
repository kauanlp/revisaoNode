const express = require('express');
const app = express();

app.get("/", function (req, res) {
    res.send("Seja bem vindo!")
});

app.get("/sobre", function (req, res) {
    res.send("Pagina SOBRE");
});

app.get("/blog", function (req, res) {
    res.send("Bem vindo ao BLOG");
});

app.listen(8081, function () {
    console.log('Servidor ON');
});