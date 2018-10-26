const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//o primeiro parametro é o próprio elemento e o segundo parametro sempre é o indice e podemos usar o 3° parametro que é o proprio array
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = (aprovado, indice) => console.log(aprovado, indice)
aprovados.forEach(exibirAprovados)

