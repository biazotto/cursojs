// estrategia 1 para gerar parametro padrao

function soma1(a , b, c){
    a = a || 1
    b = b || 1
    c = c || 1    
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2))

//estrategia 2, 3, 4 para gerar params padrao
function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 // indice 1 dentro de arguments
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1, 2))

//estrategia 5 com o es2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2))