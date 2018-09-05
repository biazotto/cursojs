// o array é heterogeneo 

const valores = [7.1 , 'teste', null, 10, 'ultimo']

console.log(valores) 

console.log(valores.length) // retorna tamanho do array
console.log(valores.pop()) // remove o ultimo valor do array e tem como retorno o valor excluído
delete valores[0] // remove o valor do indice passado
console.log(valores)

console.log(typeof valores) // arrays são do tipo Object