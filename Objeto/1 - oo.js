// coleção dinamica de par chave/valor

const produto = new Object

produto.nome = 'cadeira'
produto['marca do produto'] =  'Generica'

delete produto.nome

console.log(produto)

const carro = {
    modelo: 'a4',
    valor:89000,
    proprietario:{
        nome: 'raul',
        idade: 56,
        endereco: {
            logradouro: 'abc',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    },{
        nome: 'Maria',
        idade: 18
    }],
    calcularValorSeguro: function(){
        // ....
    }
}

console.log(carro)