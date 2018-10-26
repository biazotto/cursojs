// OPERADORES ARITIMETICOS
const [a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d
const subtracao = a - b
const multiplicacao = a * b
const divisao = a / b
const modulo = a % 2

console.log(soma, subtracao, multiplicacao, divisao, modulo)

//OPERADORES RELACIONAIS

console.log('01)', '1' == 1) // só pega o valor
console.log('02)', '1' === 1) // === extritamente igual (inclusive o tipo)
console.log ('03)', '2' != 2) // só pega o valor 
console.log('04)', '2' !== 2) // extritamente diferente (inclusive tipo)

console.log ('nao fiz as basicas que é  > , < , <= e >=')

//OPERADORES LÓGICOS , tabelinha da verdade paia 

/* 
v xor v -> f
f xor f -> f
v xor f -> v
f xor v -> v

!v -> f
!f -> v
*/

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 // || ou
    const comprarTv50 = trabalho1 && trabalho2 // && and , e
    const comprarTv32 = trabalho1 != trabalho2 // != diferente 
    const ficouSaudavel = !comprarSorvete // negação lógica 

    return {comprarSorvete, comprarTv32, comprarTv50, ficouSaudavel}
}

console.log(compras(false,false)) // 
console.log(compras(true,false)) // 
console.log(compras(true,true)) // 
console.log(compras(false,true)) // 

//OPERADORES UNÁRIOS

let num1 = 1
let num2 = 2

num1++ // sequencia "nao tem preferencia"
console.log(num1)
--num1 // tem "preferencia"
console.log(num1)

console.log(++num1 === num2--) // some 1 no num1 compara (true) e só depois diminui 1 no num2
console.log(num1 === num2) // agora o num2 ta subtraido 1 e a comparação da false

//operadores tenários
//usando arrow function
const resultado = nota => nota >= 7 ? 'Passou' : 'Não Passou'
console.log(resultado(8))
console.log(resultado(6.9))
//usando em uma váriavel direto
let nota = 10
const status = nota >= 7 ? 'Passou' : 'Não Passou'
console.log(status)