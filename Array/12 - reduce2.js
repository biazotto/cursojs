const alunos = [
    {nome:'Joao' , nota: 7.3 , bolsista: true},
    {nome:'Ana' , nota:8.5 , bolsista: true},
    {nome:'Maria' , nota:9.2 , bolsista: true},
    {nome:'Nati' , nota:10 , bolsista: false}
]

//desafio 1  Todos os alunos são bolsistas ?
console.log(alunos.map(a => a.bolsista).reduce(function (acumulador, atual){
return acumulador && atual}))

//desafio 2 algum aluno é bolsista ?
console.log(alunos.map(a => a.bolsista).reduce(function (acumulador, atual){
return acumulador || atual}))