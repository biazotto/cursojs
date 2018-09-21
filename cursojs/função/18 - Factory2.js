function criarPessoa(nome){
    return {
        nome,
        falar: function (){
            console.log(`Meu nome é ${nome}`)
        }
    }
}

const p1 = criarPessoa('joao')
p1.falar()