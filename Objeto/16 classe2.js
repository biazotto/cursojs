class avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class pai extends avo {
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome)
        this.profissao = profissao

    }
}


class filho extends pai{
    constructor(){
        super('Silva') // chama o construtor do método da classe "pai"
    }
}

const Filho = new filho
console.log(Filho)