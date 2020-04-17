import './matematica.js';
import Posicao from './posicao.js';
import Cobra from './cobra.js';
import Comida from './comida.js';

function Campo(_linha, _coluna){
    this.Linhas = _linha;
    this.Colunas = _coluna;
    this.Cobra = null;
    this.Matriz = gerarMatriz(this.Linhas, this.Colunas);
    this.Comida = null;

    this.GerarPosicaoAleatorio = function(){
        var linha = gerarInteiroAleatorio(0, this.Linhas);
        var coluna = gerarInteiroAleatorio(0, this.Colunas);
        return new Posicao(linha, coluna);
    };

    this.CobraSaiuLimiteCampo = function(){
        if(this.Cobra.Linha > this.Linhas - 1)
            this.Cobra.Linha = 0;
        if(this.Cobra.Linha < 0)
            this.Cobra.Linha = this.Linhas - 1;
        if(this.Cobra.Coluna > this.Colunas - 1)
            this.Cobra.Coluna = 0;
        if(this.Cobra.Coluna < 0)
            this.Cobra.Coluna = this.Colunas - 1;
    };

    this.GerarCobraCampo = function(){
        var posicao = this.GerarPosicaoAleatorio();
        this.Cobra = new Cobra(posicao.Linha, posicao.Coluna);
        this.AtualizarMatriz();
    };

    this.GerarComidaCampo = function(){
        var posicao;
        do{
            posicao = this.GerarPosicaoAleatorio();
        }
        while(posicao.PosicaoOcupadaPelaCobra(this.Matriz))

        this.Comida = new Comida(posicao.Linha, posicao.Coluna);

        this.AtualizarMatriz();
    };

    this.AtualizarMatriz = function(){
        var posicaoCobra = this.Cobra.PosicaoInicioCobra;
        var posicaoComida = this.Comida.Posicao;
        this.Matriz[posicaoCobra.Linha][posicaoCobra.Coluna] = posicaoOcupadaCobra;
        this.Matriz[posicaoComida.Linha][posicaoComida.Coluna] = posicaoOcupadaComida;
    };
}