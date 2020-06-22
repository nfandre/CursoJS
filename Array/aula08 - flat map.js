const escola = [{
    nome: 'turma n1',
    alunos: [{
        nome: 'gustavo',
        nota: 8.1
    }, {
        nome: 'pedro',
        nota: 9.1
    }]
}, {
    nome: 'turma n1',
    alunos: [{
        nome: 'lucas',
        nota: 8.1
    }, {
        nome: 'rebeca',
        nota: 9.5
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)
const notas1 = escola.map(getNotasTurma)

console.log(notas1)
const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)
