// utilizando destructuring em objetos

const Pessoa = {
    nome: 'Pedro',
    idade: 18,
    peso: 89,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

const {nome, idade} = Pessoa 
/*
{} para utilizar o destructuring usa-se as chaves com os elementos que quer pegar 
depois = e o objeto que você deseja pegar
feito isso ele vai criar as duas váriaveis
*/
console.log(nome, idade) 


//outro exemplo

const {nome: n, idade: i} = Pessoa
/* 
neste exemplo colocamos os nomes das variaveis criadas como n e i 
*/
console.log(n, i)

//exemplo de elemento nao constante no objeto
const{sobrenome, bemhumorada: b = true} = Pessoa
console.log(sobrenome, b )

const{ endereco: {numero, logradouro, cep}} = Pessoa


console.log(logradouro, numero, cep)

// trabalhando com destructuring em arrays

const [a] = [10] // criou a variavel a com o valor 10 do array

const [n1, , n2, n3, n4, n5, n6 = 0 ] = [10, 7, 9 , 8]

// trabalhando com destructuring dentro de funções

function rand({min = 0 , max = 1000}) { //ao invés de acessar o obejto.min e objeto.max vc "retira do obj" o min e o max
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 900})) //pega o valor padrão que colocamos lá
console.log(rand({})) //pega o valor padrão que colocamos lá tanto o min quando o max
// console.log(rand()) // da erro

//trabalhando com destructuring com arrays
function rand ([min=0 , max = 1000]){
    if(min > max) [min, max] = [max, min] //1 min/max é criando novo array 2 max/min está criando novo array (operador destruturing)
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}