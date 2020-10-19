const dados = {
    nome: 'O Famigerado',
    ra: '003048aastttxx'
};

criarAlunoMetodo1(dados.nome, dados.ra);
criarAlunoMetodo2(dados.nome, dados.ra);
criarAlunoMetodo3(dados.nome, dados.ra);


function criarAlunoMetodo1(nome, ra) {
    const aluno = {
        nome,
        ra
    };
    imprimirAluno(aluno);
}

function criarAlunoMetodo2(nome, ra) {
    const aluno = new Object();
    aluno.nome = nome;
    aluno.ra = ra;
    imprimirAluno(aluno);
}

function criarAlunoMetodo3(nome, ra) {
    const aluno = {};
    aluno['nome'] = nome;
    aluno['ra'] = ra;
    imprimirAluno(aluno);
}

function imprimirAluno(aluno) {
    const { nome, ra } = aluno;
    console.log(`Nome: ${nome} - RA: ${ra}`);
}
