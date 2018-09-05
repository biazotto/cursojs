// var pode ser declarado como global basta não estar dentro de uma função

{
    {
        {
            {
                {
                    var nome = 'Pedro'
                }
            }
        }
    }
}
console.log(nome) // consegue acessar de qualquer lugar ela se torna global

function imprimeNome(){
    var nome2 = 'pedro'
}

console.log(nome2) // nao deixa acessar a váriavel por estar dentro da função
