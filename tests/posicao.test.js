const test = require('tape');
const { Posicao } = require("./../src/posicao");

test('Verificar instancia Posicao', (t) => {
    var posicao = new Posicao(1, 2);
    t.assert(!(posicao.VerificarPosicaoOcupadaPelaCobra() || posicao.VerificarPosicaoOcupadaPelaComida()), "Verificou posicao vazia apos instanciar");
    t.end();
})

test('Verificar metodos que ocupam posicoes', (t) => {
    var posicao = new Posicao(1, 2);

    posicao.CobraOcupouPosicao();
    t.assert(posicao.VerificarPosicaoOcupadaPelaCobra(), "Verificou posicao ocupada pela cobra");
    
    posicao.ComidaOcupouPosicao();
    t.assert(posicao.VerificarPosicaoOcupadaPelaComida(), "Verificou posicao ocupada pela comida");
    
    posicao.DesocuparPosicao();
    t.assert(!(posicao.VerificarPosicaoOcupadaPelaCobra() || posicao.VerificarPosicaoOcupadaPelaComida()), "Verificou posicao vazia");
    
    t.end();
})