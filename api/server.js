const express = require("express");
const server = express();

const pessoas = [{nome: "Rô"}, {nome: "Zé"}];

server.get("/", (_requst, response) => {
  response.status(200).end("Olá mundo")
});

server.get("/ping", (_request, response) => {
  response.status(200).end("pong")
});

  // porta que retorna todas as pessoas do objeto

  // porta que retorna uma pessoa em específico

  server.use((_request, response) => {
    response.status(404).send("Rota não encontrada");
  })

server.listen(3000, () => console.log ("Servidor rodando!"));

/* const http = require('http');
Função de callback para lidar com as requisições
const requestListener = (req, res) => {
  // Verifica se a rota solicitada é "/ping"
  if (req.url === '/ping') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('pong'); // Responde com 'pong'
  }
  else if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Olá mundo'); 
  }  
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Rota não encontrada'); // Responde com erro 404 para outras rotas
  }
};

// Cria o servidor
const server = http.createServer(requestListener);

// Define a porta do servidor
const PORT = 3000;
server.listen(PORT, () => {
 console.log(`Servidor rodando na porta ${PORT}`);
}): */
