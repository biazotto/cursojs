// criando uma função

function imprimirSoma(a , b){
    console.log(a + b)
}

//chamando uma função

imprimirSoma(2, 3) // esperado retornar 5
imprimirSoma(2) // Quando se passa somente um parametro e se espera dois , o que faltou fica undefined
imprimirSoma() // seta a e b como undefined e na soma retornará NaN (porque fizemos a operação de soma)

//Função com retorno

function soma(a, b=0){ //pode se setar valor direto na declaração dos parametros
    return a + b
}

console.log(soma(2, 3)) // retorna 5
console.log(soma(2)) // retorna 2 porque o b foi setado como 0
console.log(soma()) // seta a como undefined e na soma retornará NaN (porque fizemos a operação de soma)