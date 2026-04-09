let num1 = parseFloat(prompt("Digite o primeiro número:"));
        let num2 = parseFloat(prompt("Digite o segundo número:"));

        let soma = num1 + num2;
        alert("A soma de " + num1 + " e " + num2 + " é: " + soma);
        let subtracao = num1 - num2;
        alert("A subtração de " + num1 + " e " + num2 + " é: " + subtracao);
        let multiplicacao = num1 * num2;
        alert("A multiplicação de " + num1 + " e " + num2 + " é: " + multiplicacao);
        if (num2 !== 0) {
            let divisao = num1 / num2;
            alert("A divisão de " + num1 + " e " + num2 + " é: " + divisao);

            let resto = num1 % num2;
            alert("O resto da divisão de " + num1 + " e " + num2 + " é: " + resto);
        } else {
            alert("Não é possível dividir por zero.");
        }