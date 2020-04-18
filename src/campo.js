const { GerarVetorPosicoes, GerarInteiroAleatorio } = require("./matematica");
const  { Cobra } = require("./cobra");
const  { Comida } = require("./comida");

const SentidoPadrao = {
    Left : 37,
    Up: 38,
    Right: 39,
    Down: 40
}

class Campo{
    constructor(linhas, colunas){
        this.Linhas = linhas;
        this.Colunas = colunas;
        this.Matriz = GerarVetorPosicoes(this.Linhas, this.Colunas);
        this.Cobra = null;
        this.Comida = null;
        this.TempoRecargaComida = 5;
    }

    GerarPosicaoAleatoria(){
        var linha = GerarInteiroAleatorio(0, this.Linhas);
        var coluna = GerarInteiroAleatorio(0, this.Colunas);
        return this.Matriz.find(x => x.Linha == linha && x.Coluna == coluna)
    };

    GerarCobraCampo(){
        var posicao = this.GerarPosicaoAleatoria();
        this.Cobra = new Cobra(posicao);
    };

    GerarComidaCampo(){
        var posicao;
        do{
            posicao = this.GerarPosicaoAleatoria();
        }
        while(posicao.VerificarPosicaoOcupadaPelaCobra())

        this.Comida = new Comida(posicao);
    };

    ExisteComidaCampo(){
        return this.Comida != null;
    }

    DiminuirTempoRecargaComida(){
        if(!this.ExisteComidaCampo()){
            this.TempoRecargaComida--;

            if(!this.TempoRecargaComida){
                this.GerarComidaCampo();
            }
        }
    }

    ProximaPosicaoCobra(){
        var posicaoCabeca = this.Cobra.Posicoes[0];
        var sentido = this.Cobra.Sentido;
        var linha = posicaoCabeca.Linha;
        var coluna = posicaoCabeca.Coluna;
        switch (sentido) {
            case SentidoPadrao.Left:
                coluna--;
                break;
            case SentidoPadrao.Right:
                coluna++;
                break;
            case SentidoPadrao.Up:
                linha--;
                break;
            case SentidoPadrao.Down:
                linha++;
                break;
        }

        if(linha > this.Linhas - 1 || linha < 0 || coluna > this.Colunas - 1 ||  coluna < 0)
            if(linha > this.Linhas - 1)
                linha = 0;
            else if(linha < 0)
                linha = this.Linhas - 1;
            else if(coluna > this.Colunas - 1)
                coluna = 0;
            else
                coluna = this.Colunas - 1;

        return this.Matriz.find(x => x.Linha == linha && x.Coluna == coluna);
    }

    CobraComeuComida(){
        this.Comida.Posicao.DesocuparPosicao();
        this.Comida = null;
        this.TempoRecargaComida = 5;
    }
}

module.exports = {
    Campo
}