function obterMaiorNumero() {
    const numero1 = Number(document.getElementById('numero1').value);
    const numero2 = Number(document.getElementById('numero2').value);
    const numero3 = Number(document.getElementById('numero3').value);
    const maior = maiorNumeroDentreTres(numero1, numero2, numero3);
    const resultado = document.getElementById('resultado');
    resultado.innerText = maior;
}

function maiorNumeroDentreTres(numero1, numero2, numero3) {
    return Math.max(numero1, numero2, numero3);
}
