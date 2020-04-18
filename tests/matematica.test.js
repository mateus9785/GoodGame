const test = require('tape');
const matematica = require("./../src/matematica");

var linhas = 50,
    colunas = 30;

test('Verificar matriz', (t) => {
    var matriz = matematica.GerarVetorPosicoes(linhas, colunas)
    t.assert(matriz.length === linhas * colunas, "Verificou tamanho matriz valido");
    t.assert(!matriz.some(posicao => posicao.TipoPosicao != null), "Verificou matriz todos campos nulos");
    t.end();
})

var min = 0,
    max = 40;

test('Verificar inteiro aleatorio dentro de intervalo', (t) => {
    var numeroAleatorio = matematica.GerarInteiroAleatorio(min, max)
    t.assert(numeroAleatorio >= min && numeroAleatorio <= max, "Verificou numero aleatorio valido");
    t.end();
})
