notas = [5.1 , 6.2 , 7.8 , 9.2 , 5.5]

//função normal sem callback
let notasBaixas = []
for (let i in notas){
    if (notas[i] < 7 ){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//Utilizando callback com function normal
let notasBaixas2 = []
notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})
console.log(notasBaixas2)

//utilizando callback com arrow function
let notasBaixas3 = []
notasBaixas3 = notas.filter(nota => nota<7)
console.log(notasBaixas3)

//podemos criar a function do nota baixa
const notaMenorQue7 = nota => nota < 7
notasBaixas4 = notas.filter(notaMenorQue7)
console.log(notasBaixas4)
