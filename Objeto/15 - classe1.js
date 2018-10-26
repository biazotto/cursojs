class lancamento {
    constructor(nome= 'Genérico', valor = 0 ){
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario(){
        let valorConsolidado = 0 
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}


const salario = new lancamento('Salario', 4500)
const contaLuz = new lancamento('Conta de Luz', -200)

const contas = new cicloFinanceiro()
contas.addLancamentos(salario, contaLuz)
console.log(contas.sumario())