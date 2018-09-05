// OBJETOS SÃO FUNÇÕES PORÉM INSTANCIAS DE OBJETOS SÃO OBJETOS KKK
console.log(typeof Object)
console.log(typeof new Object)

//ASSIM COMO UMA VARIAVEL 
const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

//ASSIM COMO UMA CLASSE
class Produto {} // ES 2015
console.log(typeof Produto)
console.log(typeof new Produto())