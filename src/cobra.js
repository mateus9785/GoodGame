function Cobra(_linha, _coluna) {
    this.DirecaoHorizontal = true;
    this.Sentido = SentidoPadrao.Right;
    this.Velocidade = 10;
    this.PosicaoInicioCobra = new Posicao(_linha, _coluna);
    this.Tamanho = 1;

    this.Mover = function () {
        switch (this.Sentido) {
            case SentidoPadrao.Left:
                this.PosicaoInicioCobra.Linha -= this.velocidade;
                break;
            case SentidoPadrao.Right:
                this.PosicaoInicioCobra.Linha += this.velocidade;
                break;
            case SentidoPadrao.Up:
                this.PosicaoInicioCobra.Coluna -= this.velocidade;
                break;
            case SentidoPadrao.Down:
                this.PosicaoInicioCobra.Coluna += this.velocidade;
                break;
        }

    };

    this.Acelerar = function (valor) {
        this.Velocidade+= valor;
    };

    this.Crescer = function (){
        this.Tamanho++;
    };

    this.MudarDirecao = function(event){
        var botaoApertado = event.keyCode;
        if(!sentidoValido(botaoApertado) || verificarDirecaoIgual(botaoApertado, this.Sentido))
            return;

        this.DirecaoHorizontal = !this.DirecaoHorizontal;
        this.Sentido = botaoApertado;
    };
}