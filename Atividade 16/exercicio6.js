let http = require('http');//importação do módulo http para criar um servidor web
let server = http.createServer(function(req, res){
    res.end("<html><body>Site da Fatec Sorocaba</body></html>");//resposta do servidor para o cliente
});//método createServer() para criar um servidor web, passando uma função de callback que recebe os objetos req (requisição) e res (resposta)
server.listen(3000, function(){//método listen() para iniciar o servidor na porta 3000, passando uma função de callback que é executada quando o servidor está pronto
    console.log("Servidor rodando na porta 3000");//mensagem no console indicando que o servidor está rodando
});