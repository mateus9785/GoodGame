const test = require('tape');
const direcaoSentido = require('../src/direcaoSentido');

    var left = 37,
        up = 38;
    var direcaohorizontal = true;

test('Verificou sentido', (t) => {
    t.assert(direcaoSentido.sentidoValido(left) === true, "Verificou sentido valido");
    t.assert(direcaoSentido.sentidoValido(90) === false, "Verificou sentido invalido");
    t.end();
})

test('Verificou direcao', (t) => {
    t.assert(direcaoSentido.verificarDirecaoIgual(left, direcaohorizontal) === true, "Verificou direcao valida")
    t.assert(direcaoSentido.verificarDirecaoIgual(up, direcaohorizontal) === false, "Verificou direcao invalida")
    t.end()  
})