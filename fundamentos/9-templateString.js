const nome = 'Rebeca'

const cocatenacao = 'Ola' + nome + '!'

/*
Para template String usamos ` ` 
tudo dentro do template string perde o reservamento
 e ${variável, constante, função operadores} para utilizar as coisas "reservadas"
*/
const templateString = `
Olá
${nome}!`

console.log(cocatenacao, templateString)

//Operadores
console.log(`1 + 1 = ${1 + 1}`)

//chamar uma função dentro um templateString
const up = texto => texto.toUpperCase() // criada função pra colocar maiuscula
console.log(`Ei...${up('cuidado!!')}`) // retorna o cuidado , como CUIDADO


