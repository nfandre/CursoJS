function area(largura, altura) {
    const area = largura * altura
    if(area >20){
        console.log(`valor nao permitido: ${area}m2.`)
    }else{
        return area
    }
}
console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(3,3,3))
console.log(area(20,20))
