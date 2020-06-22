const pilotos = [ 'Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //remove último elemento de um Array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona elemento na última posição de um array
console.log(pilotos)

pilotos.shift() // remove primeiro elemento de um array
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos em qualquer posição de um array
//adicionar
pilotos.splice(2,0 ,'bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

//slice retornar um novo array (pega uma parte(pedaço) de uma array
//retornando a partir de um indice
const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)

//parte do primeiro a até o último índice
const algunsPilotos2 =  pilotos.slice(1,4)
console.log(algunsPilotos2)
