function calcularIMC(peso, altura) {
    if (altura <= 0) {
        return "Altura deve ser maior que zero.";
    }
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso";
    } else if (imc >=30 && imc < 40) {
        return "Obesidade";
    }
    else {        
        return "Obesidade grave";
    }
}


 

const peso = parseFloat(prompt("Digite seu peso em kg:"));
const altura = parseFloat(prompt("Digite sua altura em metros:"));

const imc = calcularIMC(peso, altura);
const classificacao = classificarIMC(imc);

alert(`Seu IMC é: ${imc.toFixed(2)}\nClassificação: ${classificacao}`);

