const alunos = [
    { nome: 'joao', nota: 7.3, bolsista: false},
    { nome: 'maria', nota: 9.2, bolsista: false},
    { nome: 'pedro', nota: 9.8, bolsista: false},
    { nome: 'ana', nota: 8.7, bolsista: false},

]
//se preocupa com:
//imperativo - como tem que se feito? como vai ser percorrido?
let total1 = 0;
for (let i = 0; i< alunos.length; i ++){
    total1 += alunos[i].nota
}
console.log(total1/ alunos.length)

//Declarativo - o que tem que ser feito?
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/ alunos.length)
