function formatar(valor) {
    console.log(valor.toLocaleString('pt-BR', {minimumFractionDigits: 2, style: 'currency', currency: 'BRL'}))
}
console.log(formatar(0.30000000000000004 ))
