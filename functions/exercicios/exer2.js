function triangulo(lado1, lado2, lado3) {
    if(lado1 == lado2 == lado3)
        console.log('Equilátero: Os três lados são iguais')
    else
        if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3)
            console.log('Isósceles:  Dois lados iguais')
        else
            console.log(' Todos os lados são diferentes')
}

console.log(triangulo(2,2,3))
