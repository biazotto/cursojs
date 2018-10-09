const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13 
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

console.log(Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
}))

//usando destructuring em array
console.log(Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
}))

Object.defineProperty(pessoa, 'DataNascimento',{
    enumerable: true, // nao enumera no keys
    writable: false, //nao deixa escrever
    value: '01/01/2018'
} )

pessoa.DataNascimento = '01/01/2020'
console.log(pessoa.DataNascimento)

// Object.assign (ECMAScript 2015)
const destino = {a: 1}
const o1 = {b: 5}
const o2 = {c: 6, a:8} 
//vai pegar todos os atributos e os que já existirem "substitui" o valor
const obj = Object.assign(destino, o1, o2) 
console.log(destino)


//Object.freeze
console.log(obj)
Object.freeze(obj)
obj.c = 'aaa'
console.log(obj)


