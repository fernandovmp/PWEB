const Triangulo = function (x, y) {
    const base = x;
    const altura = y;
    this.calcularArea = () => base * altura / 2;
}

function AreaTriangulo() {
    const triangulo = new Triangulo(10, 10);
    const area = triangulo.calcularArea();
    alert(`
Triângulo
Base: 10 Altura: 10
Área: ${area}
`);
}
