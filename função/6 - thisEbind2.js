function pessoa(){
    this.idade = 0
    const self = this // cria uma constante pq conseguimos apontar sempre para o this da função
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(self)*/, 1000)
}

new pessoa
