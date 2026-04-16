const ESCOLHAS = ['Pedra', 'Papel', 'Tesoura'];
let pontuacaoUsuario = 0;
let pontuacaoComputador = 0;
let pontuacaoEmpate = 0;

function escolhaComputador() {
    return Math.floor(Math.random() * 3);
}

function determinarVencedor(usuario, computador) {
    if (usuario === computador) {
        return {
            resultado: 'EMPATE!',
            explicacao: `${ESCOLHAS[usuario]} x ${ESCOLHAS[computador]}`,
            classe: 'empate'
        };
    }

    const venceu =
        (usuario === 0 && computador === 2) ||
        (usuario === 1 && computador === 0) ||
        (usuario === 2 && computador === 1);

    if (venceu) {
        return {
            resultado: 'Você venceu! Parabéns Lindo(a), Cheiroso(a) e Sensual',
            explicacao: explicacaoResultado(usuario, computador),
            classe: 'vitoria'
        };
    }

    return {
        resultado: 'Você perdeu! Burro(a), Indeota',
        explicacao: explicacaoResultado(computador, usuario),
        classe: 'derrota'
    };
}

function explicacaoResultado(vencedor, perdedor) {
    if (vencedor === 0 && perdedor === 2) return 'Pedra quebra Tesoura';
    if (vencedor === 2 && perdedor === 1) return 'Tesoura corta Papel';
    if (vencedor === 1 && perdedor === 0) return 'Papel cobre Pedra';
    return '';
}

function jogar(escolhaUsuario) {
    const escolhaDoComputador = escolhaComputador();
    const resultado = determinarVencedor(escolhaUsuario, escolhaDoComputador);

    document.getElementById('escolhaUsuario').textContent = ESCOLHAS[escolhaUsuario];
    document.getElementById('escolhaComputador').textContent = ESCOLHAS[escolhaDoComputador];
    document.getElementById('resultado').textContent = resultado.resultado;
    document.getElementById('resultado').className = resultado.classe;
    document.getElementById('explicacao').textContent = resultado.explicacao;

    if (resultado.classe === 'vitoria') pontuacaoUsuario++;
    else if (resultado.classe === 'derrota') pontuacaoComputador++;
    else pontuacaoEmpate++;

    atualizarPlacar();
}

function atualizarPlacar() {
    document.getElementById('pontuacaoUsuario').textContent = pontuacaoUsuario;
    document.getElementById('pontuacaoComputador').textContent = pontuacaoComputador;
    document.getElementById('pontuacaoEmpate').textContent = pontuacaoEmpate;
}

function resetar() {
    pontuacaoUsuario = 0;
    pontuacaoComputador = 0;
    pontuacaoEmpate = 0;
    atualizarPlacar();
    document.getElementById('escolhaUsuario').textContent = '-';
    document.getElementById('escolhaComputador').textContent = '-';
    document.getElementById('resultado').textContent = 'Faça sua jogada';
    document.getElementById('resultado').className = '';
    document.getElementById('explicacao').textContent = '';
}
