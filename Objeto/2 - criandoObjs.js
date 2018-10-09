// Forma literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const Obj2 = new Object
console.log(Obj2)

//Função construtora
function Produto (nome, preco, desconto) {
    this.nome = nome,
    this.getValorComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const prod1 = new Produto('Caneta', 10 , 0.15)
const prod2 = new Produto('Celular', 1000, 0.25)
console.log(prod1.nome, prod1.getValorComDesconto())
console.log(prod2.nome, prod2.getValorComDesconto())
// não é possivel acessar ao nome e ao preco porque não estão visiveis.

//Função Factory
function CriarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
           return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = CriarFuncionario('Joao', 1500, 5)
const f2 = CriarFuncionario('Maria', 2000, 10)

console.log(f1.getSalario())
console.log(f2.getSalario())

//Função Object.Create     
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função famosa que retorna um Objeto

const fromJson = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJson.info)
