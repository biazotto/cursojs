const Aula = function(nome, aulaId){
    this.nome = nome,
    this.aulaId = aulaId
}

const aula1 = new Aula('Aula1', 1)
const aula2 = new Aula('Aula2', 2)
console.log(aula1, aula2)

//simulando o metodo new
function novo(f, ...params) {//usamos o ... para concatenar em um array o que for passado de parametro
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Aula3', 3)
const aula4 = novo(Aula, 'Aula4', 4)
console.log(aula3, aula4)


