const a = 1
const b = 2
const c = 3

//Se vc quiser manter o nome vc pode declar o obj assim
const obj1 = {
    a,
    b,
    c
}

//que equivale a
const obj2 = {
    a: a,
    b: b,
    c: c
}

console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.19

const obj3 = {}
obj3[nomeAttr] = valorAttr
//nova versao
const obj4 = {
    [nomeAttr]: valorAttr
}
console.log(obj3, obj4)


//funçoes nos objetos
const obj5 = {
    function1: function (){
        // escrevia a function
    },
    function2(){
        // pode-se escrever direto
    }
}


console.log(obj5)






