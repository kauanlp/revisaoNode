const express = require('express');
const app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/html/10.1.ExibindoHTML.html")
});

app.get("/sobre", function (req, res) {
    res.sendFile(__dirname + "/html/10.2.sobre.html")
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