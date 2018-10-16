//Object.preventExtensions 
const produto1 = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag:'promocao'
})
//não consigo inserir mas consigo apagar, alterar
console.log(Object.isExtensible(produto1))
produto1.nome = 'troca'
produto1.descricao = 'não insere'
delete produto1.tag
console.log(produto1)

//Object.seal
const produto2 = {nome:'xxxx', preco: 2.99}
Object.seal(produto2)
//conseguimos alterar porem não conseguimos inserir nem excluir
produto2.nome = 'produto2'
produto2.descricao = 'não insere'
delete produto2.nome
console.log(produto2)