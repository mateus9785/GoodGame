const test = require('tape');
const { Campo } = require("./../src/campo");

var linhas = 4,
    colunas = 4;

test('Verificar instancia campo', (t) => {
    var campoNovo = new Campo(linhas, colunas);
    t.assert(campoNovo.Comida == null && !campoNovo.ExisteComidaCampo(), "Verificou que nao havia comida");
    t.assert(campoNovo.Cobra == null, "Verificou que nao havia cobra");
    t.end();
})

test('Verificar posicoes dentro do campo', (t) => {
    var campoNovo = new Campo(linhas, colunas);
    campoNovo.GerarCobraCampo();

    var posicao = campoNovo.GerarPosicaoAleatoria();
    t.assert(campoNovo.Matriz.some(x => x == posicao), "Verificou que posicao aleatoria pertence ao campo");

    campoNovo.Cobra.Posicoes[0] = campoNovo.Matriz[0];
    var proximaPosicaoGerada = campoNovo.ProximaPosicaoCobra();
    t.assert(proximaPosicaoGerada.Linha == 0 && proximaPosicaoGerada.Coluna == 1, "Verificou se a proxima posicao para a direita estava certa ");

    var left = 37;
    campoNovo.Cobra.Sentido = left;
    proximaPosicaoGerada = campoNovo.ProximaPosicaoCobra();
    t.assert(proximaPosicaoGerada.Linha == 0 && proximaPosicaoGerada.Coluna == 3, "Verificou se a proxima posicao para a esquerda na borda estava certa");

    t.end();
})

test('Verificar criacao de entidades no campo', (t) => {
    var campoNovo = new Campo(linhas, colunas);

    campoNovo.GerarComidaCampo();
    t.assert(campoNovo.Comida != null, "Verificou que ha comida apos ser criada");

    campoNovo.GerarCobraCampo();
    t.assert(campoNovo.Cobra != null, "Verificou que ha uma cobra apos ser criada");

    t.end();
})

test('Verificar alteracao de atributos', (t) => {
    var campoNovo = new Campo(linhas, colunas);

    campoNovo.TempoRecargaComida = 1;
    campoNovo.DiminuirTempoRecargaComida();
    t.assert(campoNovo.Comida != null, "Verificou que ha comida apos acabar o tempo de recarga");

    var posicaoOcupadaComida = campoNovo.Comida.Posicao;
    campoNovo.CobraComeuComida();
    t.assert(
        !posicaoOcupadaComida.VerificarPosicaoOcupadaPelaComida() && !campoNovo.ExisteComidaCampo() && campoNovo.TempoRecargaComida == 5, 
        "Verificou que posicao foi desocupada, comida foi removida e tempo resetado"
    );

    t.end();
})