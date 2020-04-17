var posicaoVazia = null,
    posicaoOcupadaCobra = 1,
    posicaoOcupadaComida = 2;

export function Posicao(_linha, _coluna){
    this.Linha = _linha;
    this.Coluna = _coluna;

    this.PosicaoOcupadaPelaCobra = function(matriz){
        var valorPosicao = matriz[this.Linha][this.Coluna];
        return valorPosicao == posicaoOcupadaCobra;
    };

    this.PosicaoOcupadaPelaComida = function(matriz){
        var valorPosicao = matriz[this.Linha][this.Coluna];
        return valorPosicao == posicaoOcupadaComida;
    };
}