const peso1 = 1.0
const peso2 = Number('2.0')

//imprimindo as constantes
console.log(peso1, peso2)

//verificando se é inteiro
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

//imprimindo somente com 2 casas decimais
console.log(media.toFixed(2))

//transformando em String
console.log(media.toString())
console.log(media.toString(2)) // converte em binário

//verificando o tipo
console.log(typeof Number) // Number é um função.
console.log(typeof media)