// para filtrar um array

const produtos = [
    {nome: 'Noteobook', preco: 2999 , fragil: true },
    {nome: 'Ipad', preco:3999 , fragil: true },
    {nome: 'Copo de Vidro', preco:12.49 , fragil: true },
    {nome: 'Copo de Plastico', preco: 0.99 , fragil: false }
]

console.log(produtos.filter(function(p){
    return p.preco > 2500 && p.fragil == true
}))

console.log(produtos.filter(function(p){
    return p.preco > 500
}).filter(function (p){
    return p.fragil 
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil 

console.log(produtos.filter(caro).filter(fragil))