// Função construtora para Retângulo
function Retangulo(x, y) {
    this.base = x;
    this.altura = y;
    this.calcularArea = function() {
        return this.base * this.altura;
    };
}