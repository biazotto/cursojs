const alunos = [
    {nome: 'Joao', nota: 9.1},
    {nome: 'Maria', nota: 10}
]

//obter a média das notas

//Imperativo
//importamos muito mais com o COMO vamos fazer do que com o OQUE
//exemplo
let total = 0
for (i = 0 ; i < alunos.length; i ++){
    total += alunos[i].nota
}
console.log(total / alunos.length)

//Declarativo
//importamos mais com o que vamos fazer do que como estamos fazendo (reutilização é importante)
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)