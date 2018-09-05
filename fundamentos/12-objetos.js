//criando um objeto

const prod1 = {}


prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.10

console.log(prod1)

const prod2 = {
    nome: 'Celular Fajuto',
    preco: 1.99,
}
// objeto dentro de objeto

const prod3 = {
    nome: 'Celular Fajuto',
    preco: 1.99,
    obj: {
        blablabla: 10,
        obj: {
            blablabla: 20
        }
    }
}

console.log(prod2)