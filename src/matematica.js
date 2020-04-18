const  { Posicao } = require("./posicao");

function GerarVetorPosicoes(linhas, colunas){
    var matrizCampo = [];
    for (let i = 0; i < linhas; i++)
        for (let j = 0; j < colunas; j++)
            matrizCampo.push(new Posicao(i, j));

    return matrizCampo;
}

function GerarInteiroAleatorio(min, max){
    return Math.trunc(Math.random() * (max - min) + min);
}

module.exports = {
    GerarVetorPosicoes,
    GerarInteiroAleatorio
}
