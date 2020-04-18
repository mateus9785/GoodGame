const test = require('tape');
const { Cobra } = require("./../src/cobra");
const { Posicao } = require("./../src/posicao");

var posicao = new Posicao(1, 2),
    proximaPosicao = new Posicao(1, 3),
    posicaoSeraOcupada = new Posicao(2, 3),
    posicaoSeguinte = new Posicao(2, 2)

test('Verificar instancia Cobra', (t) => {
    var novaCobra = new Cobra(posicao);
    t.assert(novaCobra.Posicoes.length == novaCobra.Tamanho, "Verificou tamanho igual posicoes ocupadas");
    t.end();
})

test('Verificar direcao Cobra', (t) => {
    var down = 40,
        up = 38,
        event = { keyCode: down },
        novaCobra = new Cobra(posicao);

    novaCobra.MudarDirecao(event);
    t.assert(novaCobra.Sentido == down && !novaCobra.DirecaoHorizontal, "Verificou direcao e sentido certo apos mudar de direcao");

    event.keyCode = up;
    novaCobra.MudarDirecao(event);
    t.assert(!(novaCobra.Sentido == up), "Verificou que sentido nao muda se nao mudou de direcao");    
    t.end();
})

test('Verificar movimentacao de Cobra', (t) => {
    var novaCobra = new Cobra(posicao);

    var tamanho = novaCobra.Tamanho;
    novaCobra.Crescer();
    t.assert(tamanho + 1 == novaCobra.Tamanho, "Verificou tamanho maior apos crescer");

    var posicoesOcupadas = novaCobra.Posicoes.length;
    novaCobra.OcuparNovaPosicao(proximaPosicao);
    t.assert(posicoesOcupadas + 1 == novaCobra.Posicoes.length && proximaPosicao == novaCobra.Posicoes[0], "Verificou que cobra ocupou nova posicao");
    t.assert(proximaPosicao.VerificarPosicaoOcupadaPelaCobra(), "Verificou que a posicao foi ocupada apos se mover");  

    posicoesOcupadas = novaCobra.Posicoes.length;
    novaCobra.MoverCorpo(posicaoSeraOcupada);
    t.assert(novaCobra.Posicoes.length == posicoesOcupadas  && posicaoSeraOcupada == novaCobra.Posicoes[0], "Verificou que continua ocupando a mesma quantidade de posicoes apos se mover");
    t.assert(!posicao.VerificarPosicaoOcupadaPelaCobra(), "Verificou que a ultima posicao foi desocupada apos se mover");
    t.assert(posicaoSeraOcupada.VerificarPosicaoOcupadaPelaCobra(), "Verificou que a posicao foi ocupada apos se mover");

    novaCobra.Crescer();
    novaCobra.MoverCorpo(posicaoSeguinte);
    t.assert(proximaPosicao.VerificarPosicaoOcupadaPelaCobra(), "Verificou que continua ocupando posicao pois havia crescido");

    novaCobra.DesocuparUltimaPosicao();
    t.assert(novaCobra.Posicoes.length == novaCobra.Tamanho, "Verificou que não desocupou pois o tamanho era igual a quantidade de posicoes");
    
    t.end();
})