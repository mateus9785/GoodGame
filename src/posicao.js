const PosicoesTipos = {
    Vazia: null,
    OcupadaCobra: true,
    OcupadaComida: false
}

class Posicao{
    constructor(linha, coluna) {
        this.Linha = linha;
        this.Coluna = coluna;
        this.TipoPosicao = PosicoesTipos.Vazia;
    }

    VerificarPosicaoOcupadaPelaCobra(){
        return PosicoesTipos.OcupadaCobra == this.TipoPosicao;
    };

    VerificarPosicaoOcupadaPelaComida(){
        return PosicoesTipos.OcupadaComida == this.TipoPosicao;
    };

    CobraOcupouPosicao(){
        this.TipoPosicao = PosicoesTipos.OcupadaCobra;
    };

    ComidaOcupouPosicao(){
        this.TipoPosicao = PosicoesTipos.OcupadaComida;
    };

    DesocuparPosicao(){
        this.TipoPosicao = PosicoesTipos.Vazia;
    }
}

module.exports = {
    Posicao
}