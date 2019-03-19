var videoGames = ['Switch', 'PS4', 'XBOX'];

// var ultimoItem = videoGames.pop();

videoGames.push('3DS');

for (var numero = 0; numero < 10; numero++) {
    console.log(numero)
}

var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

for (var item = 0; item < videoGames.length; item++) {
    console.log(videoGames[item]);
    if (videoGames[item] === 'PS4') {
        break;
    }
}

var frutas = ['Banana', 'Pera', 'Uva', 'Maçã', 'Salada Mista'];

frutas.forEach(function (item, index) {
    console.log(item, index);
});

var numero = 0;
var maximo = 15;
for (; numero < maximo;) {
    console.log(numero);
    numero++;
}