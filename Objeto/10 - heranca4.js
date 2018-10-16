function meuObjeto(){}

console.log(meuObjeto.prototype)

const obj1 = new meuObjeto
const obj2 = new meuObjeto
//todos os objetos criados apartir de uma função o __proto__ apontam pra função
console.log(obj1.__proto__ === obj2.__proto__)

meuObjeto.prototype.nome = 'Anonimo'
meuObjeto.prototype.falar = function (){
    console.log(`Bom dia meu nome é: ${this.nome}`)
}
//obj1 e obj2 recebe o nome e a função falar
obj1.falar()
//é possível alterar os objetos
obj2.nome = 'Gabriel'
obj2.falar()

//Resumindo herança
console.log((new meuObjeto).__proto__ == meuObjeto.prototype) // o __proto__ da instancia aponta pra função
console.log(meuObjeto.__proto__ === Function.prototype) // o __proto__ da função aponta pra function.prototype
console.log(meuObjeto.prototype.__proto__ === Object.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)
