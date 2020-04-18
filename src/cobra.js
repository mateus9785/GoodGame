const { VerificarSentidoValido, VerificarDirecaoIgual} = require("./direcaoSentido");

const SentidoPadrao = {
    Left : 37,
    Up: 38,
    Right: 39,
    Down: 40
}

class Cobra {
    constructor(posicao){
        this.DirecaoHorizontal = true;
        this.Sentido = SentidoPadrao.Right;
        this.Tamanho = 1;
        this.Posicoes = [];
        this.OcuparNovaPosicao(posicao);
    }

    MoverCorpo(novaPosicao){
        this.OcuparNovaPosicao(novaPosicao);
        this.DesocuparUltimaPosicao();
    };

    OcuparNovaPosicao(posicao){
        posicao.CobraOcupouPosicao();
        this.Posicoes.unshift(posicao);
    }

    DesocuparUltimaPosicao(){
        if(this.Tamanho < this.Posicoes.length){
            var posicaoLiberada = this.Posicoes.pop();
            posicaoLiberada.DesocuparPosicao();
        }
    }

    Crescer(){
        this.Tamanho++;
    };

    MudarDirecao(event){
        var botaoApertado = event.keyCode;
        if(!VerificarSentidoValido(botaoApertado) || VerificarDirecaoIgual(botaoApertado, this.Sentido))
            return;

        this.DirecaoHorizontal = !this.DirecaoHorizontal;
        this.Sentido = botaoApertado;
    };
}

module.exports = {
    Cobra
}