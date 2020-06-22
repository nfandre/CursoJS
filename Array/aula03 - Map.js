// mapear um elemento em outro array
// o array mapeado terá o mesmo tamanho
//não transforma o array atual, gera um novo array

const nums = [1 , 2, 3, 4 ,5]

let resultado = nums.map((e)=>{
    return e*2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => parseFloat(e).toLocaleString('pt-BR', {minimumFractionDigits: 2, style: 'currency', currency: 'BRL'})

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)


const carrinho = [
    '{"mome": "Borracha", "preco": 3.45}',
    '{"mome": "Caderno", "preco": 13.90}',
    '{"mome": "Kit de Lapis", "preco": 41.22}',
    '{"mome": "Caneta", "preco": 7.50}'
]

//retornar um array apenas com os preços

resultado = carrinho.map((e)=>{
    return JSON.parse(e)
}).map((e)=>{
    return e.preco
})
console.log(resultado)
// colocando funcoes em variaveis

const toJsom = e => JSON.parse(e)
const getPreco = e => e.preco
resultado = carrinho.map(toJsom).map(getPreco)
console.log(resultado)


Array.prototype.map2 = function (callback) {
    const  novoArray = [];
    for(let i = 0; i<this.length; i++){
       novoArray.push(callback(this[i], i, this))
    }
    return novoArray
}

resultado = carrinho.map2(toJsom).map(getPreco)
console.log(resultado)
