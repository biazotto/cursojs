// pessoa aponta pro endereço de memória "123" que contém os {...}
const pessoa = {nome: 'Pedro'}
pessoa.nome = 'Joao'
console.log(pessoa)

/* quando eu tento colocar pessoa para receber outro endereço de memória ("456") exemplo:
pessoa = { nome: 'ana' }
não é possível porque pessoa é uma constante
quando fazemos:
pessoa.nome = 'Joao' 
ele não altera o endereço e sim o conteúdo de tal endereço...
*/

//função Object.freeze "congela" até a alteração dos valores

Object.freeze(pessoa)

pessoa.nome = 'Ana'
pessoa.end = 'não é possível nem inserir'
delete pessoa.nome //nem excluir atributos

console.log(pessoa.nome)
console.log(pessoa)

//vc pode criar o objeto em "freeze"

const pessoa2 = Object.freeze({nome: 'congelado'})
console.log(pessoa2.nome)
delete pessoa2.nome
console.log(pessoa2.nome)