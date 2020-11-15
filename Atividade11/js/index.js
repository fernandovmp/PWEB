let tipoEntrada = "none"

const texto = document.getElementById('texto');
texto.addEventListener('change', alterarTexto);
const checkMaiusculo = document.getElementById('maiusculo');
const checkMinusculo = document.getElementById('minusculo');

function alterarTexto(event) {
    if(tipoEntrada === "upper") {
        texto.value = event.target.value.toUpperCase();
        return;
    }
    if(tipoEntrada === "lower") {
        texto.value = event.target.value.toLowerCase();
        return;
    }
}

function deixarMaiusculo() {
    if(checkMaiusculo.checked) {
        tipoEntrada = "upper";
        texto.value = texto.value.toUpperCase();
        checkMinusculo.checked = false;
    }
}

function deixarMinusculo() {
    if(checkMinusculo.checked) {
        tipoEntrada = "lower"
        texto.value = texto.value.toLowerCase();
        checkMaiusculo.checked = false;
    }
}
