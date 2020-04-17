const test = require('tape');
const matematica = require('../src/matematica');

var linhas = 50,
    colunas = 30;

test('Verificar matriz', (t) => {
    var matriz = matematica.gerarMatriz(linhas, colunas)
    var linha = matriz[0];
    t.assert(matriz.length === linhas && linha.length === colunas, "Verificou tamanho matriz valido");
    t.assert(matriz.filter(linha => linha.some(celula => celula != null)).length == 0, "Verificou matriz todos campos nulos");
    t.end();
})

var min = 0,
    max = 40;

test('Verificar inteiro aleatorio dentro de intervalo', (t) => {
    var numeroAleatorio = matematica.gerarInteiroAleatorio(min, max)
    t.assert(numeroAleatorio >= min && numeroAleatorio <= max, "Verificou numero aleatorio valido");
    t.end();
})
