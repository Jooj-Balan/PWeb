const janela = document.getElementById('janela');
let isBroken = false;

janela.addEventListener('mouseover', () => {
    if (!isBroken) {
        janela.src = 'Janela Aberta.png';
    }
});

janela.addEventListener('mouseout', () => {
    if (!isBroken) {
        janela.src = 'Janela Fechada.png';
    }
});

janela.addEventListener('click', () => {
    if (!isBroken) {
        janela.src = 'Janela Quebrada.png';
        isBroken = true;
    }
});