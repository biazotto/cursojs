const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar() 
falar() // conflito o this da função não em pessoa

const falarDepessoa = pessoa.falar.bind(pessoa) // com o bind passamos o this para sempre pegar de pessoa
falarDepessoa()