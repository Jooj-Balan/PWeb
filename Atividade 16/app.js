let express = require('express');//importação do módulo express para criar um servidor web
let app = express();//criação de uma instância do express para configurar o servidor
app.listen(3000, function(){//método listen() para iniciar o servidor na porta 3000, passando uma função de callback que é executada quando o servidor está pronto
    console.log("Servidor rodando na porta 3000");//mensagem no console indicando que o servidor está rodando
});//método listen() para iniciar o servidor na porta 3000, passando uma função de callback que é executada quando o servidor está pronto