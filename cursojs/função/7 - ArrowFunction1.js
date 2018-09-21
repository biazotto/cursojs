//Função normal
let dobro = function (a){
    return 2 * a
}

//Função arrow
dobro = (a) => {
    return 2 * a
}

// () => 2 * a 

//Função arrow de uma unica linha
dobro = a => 2 * a //apenas 1 argumento nao precisa do () , sem as {} retorno é implicito
console.log(dobro(Math.PI))
ola = () => 'Ola' //sem parametros
console.log(ola())



