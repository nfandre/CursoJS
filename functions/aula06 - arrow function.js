let dobro = function (a) {
    return  a *2
}

dobro = (a) => {
    return a * 2
}

dobro = a => 2 * a //return implicito
console.log(4)

let ola = function () {
    return 'ola'
}

ola = _ => 'ola'
ola = () => 'ola'

console.log(ola())


