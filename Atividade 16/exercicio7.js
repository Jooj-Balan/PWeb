let http = require('http');//importação do módulo http para criar um servidor web
let server = http.createServer(function(req, res) {
    let opcao = req.url;//variável para armazenar a URL da requisição
    if (opcao == "/historia"){//condição para verificar se a URL é "/historia"
        res.end("<html><body>Historia da Fatec Sorocaba</body></html>");//resposta do servidor para o cliente quando a URL for "/historia"
    } else if (opcao == "/Cursos"){//condição para verificar se a URL é "/cursos"
        res.end("<html><body>Cursos</body></html>");//resposta do servidor para o cliente quando a URL for "/cursos"
    } else if (opcao == "/Professores"){//condição para verificar se a URL é "/professores"
        res.end("<html><body>Professores</body></html>");//resposta do servidor para o cliente quando a URL for "/professores"
    } else {//condição para verificar se a URL não é nenhuma das anteriores
        res.end("<html><Não é nenhuma</body></html>");//resposta do servidor para o cliente quando a URL for diferente das anteriores
    }
});//método createServer() para criar um servidor web, passando uma função de callback que recebe os objetos req (requisição) e res (resposta)
    
server.listen(3000, function(){//método listen() para iniciar o servidor na porta 3000, passando uma função de callback que é executada quando o servidor está pronto
    console.log("Servidor rodando na porta 3000");//mensagem no console indicando que o servidor está rodando
});