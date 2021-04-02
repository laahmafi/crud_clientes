//importa os módulos http e express
const http = require('http');
const express = require('express');
//constrói um objeto express
const app = express();
//importa o body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//configura a porta do servidor e o coloca em execução.
const porta = 3000;
app.set('port', porta);
const server = http.createServer(app);
server.listen(3000);
let id = 2;
let clientes = [{
        id: 1,
        nome: "João",
        email: "joao@email.com"
    },
    {
        id: 2,
        nome: "Maria",
        email: "maria@email.com"
    }
];
let clientes2 = [];
//tratamento de requisições POST
app.post("/clientes", (req, res, next) => {
    const aluno = {
        id: id += 1,
        nome: req.body.nome,
        email: req.body.email
    }
    clientes.push(cliente)
    res.status(201).json(cliente);
});
//tratamento de requisições GET
app.get("/clientes", (req, res, next) => {
    res.status(200).json(clientes);
})
//tratamento de requisições PUT
app.put("/clientes", (req, res, next) => {
    clientes.forEach((cliente) => {
        if (cliente.id === req.body.id) {
            cliente.nome = req.body.nome;
            cliente.email = req.body.email
        }
    })
    res.status(204).end();
});
//tratamento da requisicao DELETE
app.delete("/clientes", (req, res, next) => {
    clientes.forEach((cliente) => {
        if (cliente.id != req.body.id) {
            const aluno2 = {
                id: cliente.id,
                nome: aluclienteno.nome,
                email: cliente.email
            }
            alunos2.push(aluno2)
        }
    });   
    clientes = clientes2;
     res.status(204).end();   
});
