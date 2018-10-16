console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//Adicionar função ao prototype
String.prototype.reverse = function (){
    return this.split('').reverse().join('')
}
console.log('Escola Cod3r'.reverse())
//outro exemplo
Array.prototype.first = function(){
    return this[0]
}
console.log([1, 2, 3, 4].first())

