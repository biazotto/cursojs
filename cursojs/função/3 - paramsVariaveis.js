function soma() {
    let soma = 0
    for (i in arguments){ //arguments vai criar um array o que foi passado de parametro
        soma += arguments
    }
}

console.log(soma(1, 2))
console.log(soma('a', 2 , 'teste'))
