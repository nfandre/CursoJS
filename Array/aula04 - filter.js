// forma de filtrar um array
// dependendo do filtro
const produtos = [
    {nome: 'notebook', preco: 2449, fragil: true},
    {nome: 'ipad', preco: 4999, fragil: true},
    {nome: 'copo de vidro', preco: 12.49, fragil: true},
    {nome: 'copo plástico', preco: 18.88, fragil: false}
]

console.log(produtos.filter( (p) =>{
    return p.fragil == true && p.preco > 1000
}))

const fragil = e => e.fragil
const caro = e => e.preco  > 500

console.log(produtos.filter(fragil).filter(caro))

Array.prototype.filter2 = function (callback) {
    const array = []
    for (let i = 0; i<this.length; i++){
        if( callback(this[i], i, this)) {
            array.push(this[i])
        }
    }
    return array
}

console.log(produtos.filter2(fragil).filter2(caro))
