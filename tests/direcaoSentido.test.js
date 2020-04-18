const test = require('tape');
const direcaoSentido = require('../src/direcaoSentido');

    var left = 37,
        up = 38;
    var direcaohorizontal = true;

test('Verificar sentido', (t) => {
    t.assert(direcaoSentido.VerificarSentidoValido(left) === true, "Verificou sentido valido");
    t.assert(direcaoSentido.VerificarSentidoValido(90) === false, "Verificou sentido invalido");
    t.end();
})

test('Verificar direcao', (t) => {
    t.assert(direcaoSentido.VerificarDirecaoIgual(left, direcaohorizontal) === true, "Verificou direcao valida")
    t.assert(direcaoSentido.VerificarDirecaoIgual(up, direcaohorizontal) === false, "Verificou direcao invalida")
    t.end()  
})