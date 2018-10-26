// como boa prática devemos utilizar o array homogeneamente, porém ele aceita heterogenia
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

//para alterar um elemento de um array
aprovados[0] = 'troca'

//para inserir um elemento no array
aprovados.push('inseriu')

aprovados[9] = 'kkkk'
console.log(aprovados.length) // tras o tamanho do array
aprovados.sort() //organiza o array por ordem alfabetica
console.log(aprovados)

delete aprovados[1] //excluir o elemento , deixa como undefined mas nao muda os indices

console.log(aprovados)

aprovados.splice(1, 2) // 1 = indice inicial , 2 = numero de indices a excluir 
aprovados.splice(1, 0, 'Elemento 1', 'Elementro 2') // terceiro e quarto parametros sao inseridos no array a partir do indice do primeiro parametro
console.log(aprovados)


