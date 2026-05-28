function exibeMensagensNaOrdem(mensagem, callback){
    console.log(mensagem);
    callback();
}
exibeMensagensNaOrdem('Essa é a primeira mensagem exibida na Ordem', function (){
    console.log('Essa é a segunda mensagem exibida na ordem');
})