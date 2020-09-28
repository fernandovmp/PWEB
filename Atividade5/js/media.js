function calcularMedia() {
    const nomeAluno = prompt('Informe o nome do aluno: ', '');
    const notas = [];
    for (let i = 0; i < 3; i++) {
        const entradaNota = prompt(`Informe a nota ${i + 1} do aluno: `, '0');
        const nota = parseFloat(entradaNota);
        notas.push(isNaN(nota) ? 0 : nota);
    }

    function calcularMediaAritimetica(valores) {
        const valorInicial = 0;
        const somatoria = valores.reduce(
            (somaNotas, nota) => somaNotas + nota,
            valorInicial
        );
        return somatoria / valores.length;
    }

    const media = calcularMediaAritimetica(notas);
    alert(`A média final do aluno ${nomeAluno} é ${media}`);
}
