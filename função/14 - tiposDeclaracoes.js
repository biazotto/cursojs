/* function declaration
dessa forma vc pode chamar a função antes dela ser declarada
o interpretador javascript carrega primeiro de tudo as funções
*/
function soma(x, y) {
    return x + y
}

// function expression , nao é possivel pq vira uma "constante"
const sub = function(x,y){
    return x - y
}

//named function expression

const mult = function mult(x, y){
    return x * y
}

