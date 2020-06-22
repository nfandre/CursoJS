// função em JS é Firs-Class Object (Citizens)
// Higher-order funcion

//criar de fomar literal
function func1() {
}

//Armazenzar em uma variável
const func2 = function () { }

//Armazenar em um array
const array = [function(a,b){return a + b}, func1, func2]
console.log(array[0](2,3));

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {
    return 'Opa'
}
console.log(obj.falar())

//Passa função como parametro
function run(fun){
    fun()
}

run (function ( ) {
    console.log('executando')
})

// uma função pode retornar/conter uma função
function soma(a,b){
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2,3)(5)
const cinco = soma(2,3)
cinco(5);


