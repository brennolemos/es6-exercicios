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