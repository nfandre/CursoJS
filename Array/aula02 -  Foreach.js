const aprovados = [ 'luis', 'pesdro', 'andre', 'alisson']

aprovados.forEach((nome, i)=>{
    console.log(`${i +1}) ${nome}`)
})

const exibirAprovados = (nome, i) => console.log(`${i +1}) ${nome}`)
aprovados.forEach(exibirAprovados)

Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i< this.length; i++){
        callback(this[i], i, this)
    }
}

aprovados.forEach2(exibirAprovados)
