// Função em JS é First-Class Object (Citizen) Cidadao de primeira classe
// HIGH-ORDER FUNCTION

//criar de forma literal
function fun1(){

}
//armazenar a função em uma váriavel
const fun2 = function(){

}

//armazenar em um array
const array = [
    function(a, b){
        return a + b
    },
    2,
    3
]
console.log(array[0](1,2))

//amezenando em um objeto
const obj = {}
obj.falar = function(){ return 'opa'}
console.log(obj.falar())

//passar uma func como parametro
function run(fun){
    fun()
}
run(function(){console.log('executou a funçao')})

//uma funçao pode retornar/conter uma funçao
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4)