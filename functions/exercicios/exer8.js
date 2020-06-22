let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
function desempenho(pontuacoes) {
    pontuacoes = pontuacoes.split(',')

    let maioPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]
    let resultado = [0,0]
    pontuacoes.forEach((pontuacao, i)=> {
        if (maioPontuacao > pontuacoes[i]){
            maioPontuacao = pontuacoes[i];
            resultado[0]++;
        }
        if(pontuacoes[i] < menorPontuacao){
            menorPontuacao = pontuacoes[i]
            resultado[1] = i + 1
        }
        resultado = resultado
    })
}

console.log(desempenho(stringPontuacoes))
