var possuiGraduacao = false;
var possuiDoutorado = true;

if (possuiGraduacao) {
    console.log('É verdadeiro');
    var x = 10;
} else if (possuiDoutorado) {
    console.log('Possui Doutorado!');
} else {
    console.log('Não possui nada!');
}

var nome = 'Breno';

if (nome) {
    console.log(nome);
} else {
    console.log('Nome não existe!');
}

if (!possuiGraduacao) {
    console.log('Não possui graduação!')
}

if ((5 - 5) && (5 + 5)) {
    console.log('verdadeiro');
} else {
    console.log('falso');
}

var condicional = (5 - 10) && (5 + 5);
if (condicional) {
    console.log('verdadeiro', condicional);
} else {
    console.log('falso');
}

var condicional2 = (5 - 5) || (5 + 5) && (10 - 2);
console.log(condicional2);

var corFavorita = 'Azul';
switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu');
        break;
    case 'Amarelo':
        console.log('Olhe para o sol');
        break;
    case 'Verde':
        console.log('Olhe para a floresta');
    default:
        console.log('Feche os olhos');
}