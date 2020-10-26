let estado = "fechada";

function alterarEstado(novoEstado) {
    estado = novoEstado;
    const imagem = document.getElementById('janela');
    imagem.src = `${estado}.png`;
}

function abrir() {
    if(estado === "quebrada") return;
    alterarEstado('aberta');
}
function fechar() {
    if(estado === "quebrada") return;
    alterarEstado("fechada");
}
function quebrar() {
    alterarEstado("quebrada");
}
