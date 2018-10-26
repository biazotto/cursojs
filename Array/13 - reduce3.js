Array.prototype.reduce2 = function(callback, valorInicial){
    let posicaoInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let i= posicaoInicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const alunos = [
    {nome: 'Joao' , nota: 7.3 , bolsista: true},
    {nome:'Ana' , nota:8.5 , bolsista: false},
    {nome:'Maria' , nota:9.2 , bolsista: true},
    {nome:'Nati' , nota:10 , bolsista: false}
]

console.log(alunos.map(a => a.nota).reduce2(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, ))