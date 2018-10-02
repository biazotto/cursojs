const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(3, 4) // posso omitir que ele ta setado padrão
imprimirResultado(3, 4, (x, y) => x*y) // usando arrow function anonima
imprimirResultado(3, 4, function (x, y){return x-y}) // usando funçao anonima

const Pessoa = {
    falar: function (){
        return console.log('ola')
    }
}

Pessoa.falar()