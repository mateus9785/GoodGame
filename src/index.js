const { Campo } = require("./campo");

var novoCampo;
var intervaloRepeticao;
var linhas = 30,
    colunas = 50;

ComecarJogo();

function ComecarJogo(){
    novoCampo = new Campo(linhas,colunas);
    novoCampo.GerarCobraCampo();

    document.onkeyup = function(event) {novoCampo.Cobra.MudarDirecao(event)};
    intervaloRepeticao = window.setInterval(AtualizarTela, 200);
}

function AtualizarTela(){
    var posicao = novoCampo.ProximaPosicaoCobra();
    if(posicao.VerificarPosicaoOcupadaPelaComida()){
        novoCampo.Cobra.Crescer();
        novoCampo.CobraComeuComida();
    }
    else if(posicao.VerificarPosicaoOcupadaPelaCobra()){
        clearInterval(intervaloRepeticao);
        return;
    }
    novoCampo.Cobra.MoverCorpo(posicao);
    novoCampo.DiminuirTempoRecargaComida();
    GerarTela();
}

function GerarTela(){
    var canvas = document.getElementById("divCampoJogo");
    var contexto = canvas.getContext("2d");
    contexto.clearRect(0, 0, canvas.width, canvas.height);
    contexto.fillStyle = "#cf1439";
    novoCampo.Cobra.Posicoes.forEach(posicao => {
        contexto.fillRect(posicao.Coluna * 10, posicao.Linha * 10, 10, 10);
    });

    if(novoCampo.ExisteComidaCampo()){
        var posicao = novoCampo.Comida.Posicao;
        contexto.fillStyle = "#e0a72b";
        contexto.fillRect(posicao.Coluna * 10, posicao.Linha * 10, 10, 10);
    }
}
