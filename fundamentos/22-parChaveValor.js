// par nome/valor ou chave/valor
const saudacao = 'Opa!!' // contexto léxico 1

function exec() {
    const saudacao = 'Falaa Fiote' // contexto léxico 2 (outro "bloco")
    return saudacao
}

//Objetos sao grupos aninhados de partes nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 18,
    peso: 89,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao) // vai imprimir o que está no léxico 1
console.log(exec()) // vai utilizar o saudacao do contexto léxico 2 porque está dentro da função
console.log(cliente)