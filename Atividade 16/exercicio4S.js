const fs = require ('fs'); // carregando módulo filesystem
const data = fs.readFileSync('file.txt.txt');
// a execução é bloqueada aqui até o arquivo ser lido
console.log(data.toString());