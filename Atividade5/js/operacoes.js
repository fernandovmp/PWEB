const entradaNumeroA = prompt('Informe o primeiro número: ', '0');
const entradaNumeroB = prompt('Informe o segundo número: ', '0');
const numeros = [entradaNumeroA, entradaNumeroB].map((valor) =>
    parseFloat(valor)
);

const soma = numeros[0] + numeros[1];
const subtracao = numeros[0] - numeros[1];
const produto = numeros[0] * numeros[1];
const divisao = numeros[0] / numeros[1];
const restoDivisao = numeros[0] % numeros[1];

alert(`
${numeros[0]} + ${numeros[1]} = ${soma}
${numeros[0]} - ${numeros[1]} = ${subtracao}
${numeros[0]} * ${numeros[1]} = ${produto}
${numeros[0]} / ${numeros[1]} = ${divisao}
Resto da dívisãao "${numeros[0]} / ${numeros[1]}" é ${restoDivisao}
`);
