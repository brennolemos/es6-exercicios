var pessoa = {
    nome: 'Breno',
    idade: 24,
}

var quadrado = {
    lados: 4,
    area(lado) {
        return lado ** 2;
    },
    perimetro(lado) {
        return lado * this.lados;
    }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random());


var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84e',
    metadeHeight() {
        return this.height / 2;
    }
}
menu.backgroundColor = "#000";
menu.color = "blue";
menu.esconder = function() {
    console.log('Escondi');
}
var bg = menu.backgroundColor;