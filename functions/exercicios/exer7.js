function bhaskara (ax2, bx, c){
    let delta = (bx ** 2) - (4 * ax2 * c)
    if(delta < 0) return "delta negativo"
    let result = []

    result.push((-bx + Math.sqrt(delta))/ 2 * ax2)
    result.push((-bx - Math.sqrt(delta))/ 2 * ax2)

    return result
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))
