//é uma função que serve para transformar um array em outro elemento a partir de um acumulador
// agregar valores, somatória
const alunos = [
    { nome: 'joao', nota: 7.3, bolsista: false},
    { nome: 'maria', nota: 9.2, bolsista: false},
    { nome: 'pedro', nota: 9.8, bolsista: false},
    { nome: 'ana', nota: 8.7, bolsista: false},

]
console.log(alunos.map(a => a.nota))
let resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)
console.log(resultado.toFixed(2))


//retornar verdadeiro falso = todos os alunos são bolsistas?
const saoBolsistas = (acumulador, atual) => {
    return acumulador && atual
}
resultado = alunos.map(a => a.bolsista).reduce(saoBolsistas)
console.log(resultado)

//algum aluno é bolsita?
const algumBolsista = (acumulador, atual) => {
    return acumulador || atual
}
resultado = alunos.map(a => a.bolsista).reduce(algumBolsista)
console.log(resultado)


Array.prototype.reduce2 = function (callback, valorIncial) {
    const indiceInicial = valorIncial ? true : false
    let acumulador = indiceInicial || this[0]
    for (let i= 0; i<this.length; i++ ){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}
resultado = alunos.map(a => a.bolsista).reduce2(algumBolsista, true)
console.log(resultado)
