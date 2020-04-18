const test = require('tape');
const { Posicao } = require("./../src/posicao");
const {Comida} = require("./../src/comida");

test('Verificar instancia comida', (t) => {
    var posicao = new Posicao(2, 3);
    var novaComida = new Comida(posicao);
    t.assert(posicao.VerificarPosicaoOcupadaPelaComida(), "Verificou que posicao é ocupada pela comida");
    t.end();
})
