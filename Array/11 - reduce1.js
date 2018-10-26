const alunos = [
    {nome: 'Joao' , nota: 7.3 , bolsista: true},
    {nome:'Ana' , nota:8.5 , bolsista: false},
    {nome:'Maria' , nota:9.2 , bolsista: true},
    {nome:'Nati' , nota:10 , bolsista: false}
]

console.log(alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0))

