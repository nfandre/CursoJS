function capital(capital , taxaJutos, tempoAplicacao) {
    console.log((capital * taxaJutos * tempoAplicacao) + capital)
    console.log((capital * (1 + taxaJutos)**tempoAplicacao).toFixed(2))
}
console.log(capital(100, 0.1, 2))
