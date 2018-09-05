// declarando a variavel duas vezes em escopos diferentes

var valor = 1

{
    var valor = 2
    console.log('Dentro ' + valor)
}

console.log('Fora ' + valor)

// O que acontece é que ele sobrescreve a variavel