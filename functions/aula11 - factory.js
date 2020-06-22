function criarPessoa(nome = null, sobrenome = null) {
    return {
        nome: nome,
        sobrenome: sobrenome
    }
}

console.log(criarPessoa('andre', 'nascimento'));

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
console.log(new Pessoa('ANDRE').falar())

const pessoa2 = (nome) => {
    return { falar: () => `Meu nome é ${nome}`}
}
console.log(pessoa2('alisson').falar())


