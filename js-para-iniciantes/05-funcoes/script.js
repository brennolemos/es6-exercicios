// Crie uma função para verificar se um valor é Truthy
function verificaTruthy(valor) {
    if (valor) {
        return `${valor} é Truthy`;
    } else {
        return `${valor} é False`;
    }
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado) {
    return lado * 4;
}
// console.log(perimetro(5));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}
// console.log(nomeCompleto('Breno', 'Lemos'));

// Crie uma função que verifica se um número é par
function verificaPar(numero) {
    if (numero % 2 === 0) {
        return `${numero} é par`;
    } else {
        return 'Esse número não é par';
    }
}
// console.log(verificaPar(11));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function retornaTipo(dado) {
    return typeof dado;
}
// console.log(retornaTipo(true));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function () {
    console.log('Breno da Silva Lemos');
})

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
