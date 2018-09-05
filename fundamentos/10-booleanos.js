//Trabalhando com booleanos 
let isAtivo = false
console.log(isAtivo)
isAtivo = true
console.log(isAtivo)

//convertendo algo que não é false ou true
isAtivo = 1
console.log(!!isAtivo) // retorna se é verdadeiro/falso !não !!nãonão

///verdadeiros
console.log(!!3) // numeros positivos
console.log(!!-1) // numeros negativos
console.log(!!' ') // Espaço
console.log(!![]) // Arrays
console.log(!!{}) // objetos
console.log(!!Infinity) // infinito
console.log(!!(isAtivo = [])) // se o resultado da atribuição for algo que retorne verdadeiro

// Falsos

console.log(!!0) // numero 0
console.log(!!'') // String Vazia 
console.log(!!null) // null
console.log(!!NaN) // NaN not a number
console.log(!!undefined) // undefined
console.log(!!(isAtivo = NaN)) // se o resultado da atribuição for algo que retorne falso


//Expressoes...
console.log(!!('' || 0 || null)) // vai retornar false porque só tem falso ...
console.log(!!('' || 'ABC' || null)) // vai retornar true porque tem a string ABC  ...

//testando...

let nome = ''
console.log(nome || 'Desconhecido') // vai ver que nome é falso e vai imprimir a String 'Desconhecido'

nome = 'Lucas'
console.log (nome || 'Desconhecido') // vai imprimir o nome Lucas porque é verdadeiro (primeiro)
console.log ('Desconhecido' || nome) // vai imprimir Desconhecido porque é verdadeiro (primeiro)
