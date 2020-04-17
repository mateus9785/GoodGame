
function gerarMatriz(linhas, colunas){
    var matrizCampo = [];
    for (let i = 0; i < linhas; i++) {
        var linha = [];
        for (let j = 0; j < colunas; j++)
            linha.push(null);
    
        matrizCampo.push(linha);
    }

    return matrizCampo;
}

function gerarInteiroAleatorio(min, max){
    return Math.trunc(Math.random() * (max - min) + min);
}