function jogarPedra() {
    jogar(0);
}
function jogarPapel() {
    jogar(1);
}
function jogarTesoura() {
    jogar(2);
}

function jogar(escolhaDoJogador) {
    const computador = obterJogadaDoComputador();
    const resultado = obterResultado(escolhaDoJogador, computador);
    const textoResultado = document.getElementById('resultado');
    const textoJogadas = document.getElementById('jogadas');
    textoJogadas.innerText = `Jogador: ${obterTextoDaJogada(
        escolhaDoJogador
    )} Vs Computador: ${obterTextoDaJogada(computador)}`;
    if (resultado === -1) {
        textoResultado.innerText = 'Derrota!';
    }
    if (resultado === 0) {
        textoResultado.innerText = 'Empate!';
    }
    if (resultado === 1) {
        textoResultado.innerText = 'Vitória!';
    }
}

function obterResultado(escolhaDoJogador, computador) {
    if (escolhaDoJogador === computador) return 0;
    if (escolhaDoJogador === 0 && computador === 1) {
        return -1;
    }
    if (escolhaDoJogador === 1 && computador === 2) {
        return -1;
    }
    if (escolhaDoJogador === 2 && computador === 0) {
        return -1;
    }
    if (escolhaDoJogador === 0 && computador === 2) {
        return 1;
    }
    if (escolhaDoJogador === 1 && computador === 0) {
        return 1;
    }
    if (escolhaDoJogador === 2 && computador === 1) {
        return 1;
    }
}

function obterJogadaDoComputador() {
    const random = Math.random();
    if (random < 0.333) return 0; // Pedra
    if (random < 0.666) return 1; // Papel
    return 2; // Tesoura
}

function obterTextoDaJogada(jogada) {
    switch (jogada) {
        case 0:
            return 'Pedra';
        case 1:
            return 'Papel';
        default:
            return 'Tesoura';
    }
}
