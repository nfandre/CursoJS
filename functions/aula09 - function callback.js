const fabricantes = ['ford', 'mercedes', 'bmw']

function imprimir(nome, indice){
    console.log(`${indice + 1} ${nome}` )
}

fabricantes.forEach(imprimir);
fabricantes.forEach(fabricante => console.log(fabricante))
fabricantes.forEach((fabricante, indice) =>{
    console.log(fabricante, indice)
})

const notas = [10, 9 , 5, 3, 6]
// sem callback
let notasBaixas  = []
for(let i in notas){
    if(notas[i] <7) notasBaixas.push(notas[i]);
}
console.log(notasBaixas)

//com callback
notasBaixas = notas.filter(nota => nota <= 7);
console.log(notasBaixas)

//Exemplo callback browser
document.getElementsByName('body')[0].onclick = (e) =>{
    console.log("ocorreu o evento")
}
