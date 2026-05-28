let eventos = require('events');//atribuição da classe EventEmitter a uma variável
let EmissorEventos = eventos.EventEmitter();
//O emissor de eventos, encontra-se na propriedade EventEmitter do módulo events, e é uma função construtora, ou seja, é necessário criar um objeto a partir dela para poder usar seus métodos.
let ee = new EmissorEventos();
//ou criando direto sem a variável EmissorEventos
//let ee = new eventos.EventEmitter();

ee.on('dados', function(fecha){
    console.log(fecha);
});//método on() para ouvir o evento 'dados' e executar a função de callback quando o evento for emitido

ee.emit('dados', 'primeira vez'+Date.now());//método emit() para emitir o evento 'dados' com um argumento que é a string 'primeira vez' concatenada com a data atual

setInterval(function(){
    ee.emit('dados', Date.now());
}, 500);//método setInterval() para emitir o evento 'dados' a cada segundo, passando a data atual como argumento