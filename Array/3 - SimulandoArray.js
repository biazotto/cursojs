const quaseArray = {0:'Cida', 1: 'ana', 2: 'Natalia'}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function() {return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[1]) //podemos acessar um objeto com a notação de array ele recebe como key e retorna o value

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(meuArray, quaseArray.toString())