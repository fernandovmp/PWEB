function Conta() {
    const atributos = {
        nomeCorrentista: '',
        banco: '',
        numeroConta: 0,
        saldo: 0
    };
    this.getNomeCorrentista = () => atributos.nomeCorrentista;
    this.setNomeCorrentista = nome => atributos.nomeCorrentista = nome;
    this.getBanco = () => atributos.banco;
    this.setBanco = banco => atributos.banco = banco;
    this.getNumeroConta = () => atributos.numeroConta;
    this.setNumeroConta = numeroConta => atributos.numeroConta = numeroConta;
    this.getSaldo = () => atributos.saldo;
    this.setSaldo = saldo => atributos.saldo = saldo;
}

function Corrente() {
    const atributos = {
        saldoEspecial: 0
    };
    this.getSaldoEspecial = () => atributos.saldoEspecial;
    this.setSaldoEspecial = saldoEspecial => atributos.saldoEspecial = saldoEspecial;
}
Corrente.prototype = new Conta();

function Poupanca() {
    const atributos = {
        juros: 0,
        dataVencimento: new Date()
    };
    
    this.getJuros = () => atributos.juros;
    this.setJuros = juros => atributos.juros = juros;
    this.getDataVencimento = () => atributos.dataVencimento;
    this.setDataVencimento = data => atributos.dataVencimento = data;
}
Poupanca.prototype = new Conta();

function ExecutarContas() {
    const contaCorrente = new Corrente();
    contaCorrente.setNomeCorrentista("O Famigerado Correntista");
    contaCorrente.setBanco("Aquele lá");
    contaCorrente.setNumeroConta(120);
    contaCorrente.setSaldo(1000);
    contaCorrente.setSaldoEspecial(200);
    const contaPoupanca = new Poupanca();
    contaPoupanca.setNomeCorrentista("A Poupança");
    contaPoupanca.setBanco("Aquele lá");
    contaPoupanca.setNumeroConta(110);
    contaPoupanca.setSaldo(500);
    contaPoupanca.getJuros(10);
    contaPoupanca.setDataVencimento(new Date(2020, 12, 1));
    alert(`
Conta Corrente: ${contaCorrente.getNomeCorrentista()}
    Banco: ${contaCorrente.getBanco()} Número da Conta: ${contaCorrente.getNumeroConta()}
    Saldo: ${contaCorrente.getSaldo()} Saldo Especial: ${contaCorrente.getSaldoEspecial()}
Conta Poupanca: ${contaPoupanca.getNomeCorrentista()}
    Banco: ${contaPoupanca.getBanco()} Número da Conta: ${contaPoupanca.getNumeroConta()}
    Saldo: ${contaPoupanca.getSaldo()}
    Juros: ${contaPoupanca.getJuros()} Vencimento: ${contaPoupanca.getDataVencimento()}
`);
}
