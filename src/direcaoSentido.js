const SentidoPadrao = {
    Left : 37,
    Up: 38,
    Right: 39,
    Down: 40
}

const SentidoHorizontal = [SentidoPadrao.Left, SentidoPadrao.Right];

function VerificarDirecaoIgual(sentidoEscolhido, direcaoHorizontalCobra){
    var direcaoHorizontalEscolhida = SentidoHorizontal.indexOf(sentidoEscolhido) != -1;
    return direcaoHorizontalEscolhida == direcaoHorizontalCobra;
}

function VerificarSentidoValido(botaoApertado){
    var sentidosPossiveis = Object.values(SentidoPadrao);
    return sentidosPossiveis.indexOf(botaoApertado) != -1;
}

module.exports = {
    VerificarDirecaoIgual,
    VerificarSentidoValido
}
