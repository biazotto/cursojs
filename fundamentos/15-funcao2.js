// Armazenando uma função dentro de uma váriavel/constante

const imprimirSoma = function (a, b){
    console.log(a+b)
}

imprimirSoma(2, 3)

//Função arrow e com retorno

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implicito

const subtracao = (a, b) => a- b

console.log(subtracao(3, 2))


