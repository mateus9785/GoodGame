const { Campo } = require("./campo");

var novoCampo;
var linhas = 50,
    colunas = 30;

ComecarJogo();

function ComecarJogo(){
    novoCampo = new Campo(linhas,colunas);
    novoCampo.GerarCobraCampo();

    document.onkeyup = function(event) {novoCampo.Cobra.MudarDirecao(event)};
    window.setInterval(AtualizarTela, 300);
}

function AtualizarTela(){
    var posicao = novoCampo.ProximaPosicaoCobra();
    if(posicao.VerificarPosicaoOcupadaPelaComida()){
        novoCampo.Cobra.Crescer();
        novoCampo.CobraComeuComida();
    }
    novoCampo.Cobra.MoverCorpo(posicao);
    novoCampo.DiminuirTempoRecargaComida();
    GerarTela();
}

function GerarTela(){
    var canvas = document.getElementById("divCampoJogo");
    var contexto = canvas.getContext("2d");
    contexto.clearRect(0, 0, canvas.width, canvas.height);
    contexto.fillStyle = "#e0a72b";
    novoCampo.Cobra.Posicoes.forEach(posicao => {
        contexto.fillRect(posicao.Linha * 10, posicao.Coluna * 10, 10, 10);
    });

    if(novoCampo.ExisteComidaCampo()){
        var posicao = novoCampo.Comida.Posicao;
        contexto.fillStyle = "#292cd4";
        contexto.fillRect(posicao.Linha * 10, posicao.Coluna * 10, 10, 10);
    }
}
