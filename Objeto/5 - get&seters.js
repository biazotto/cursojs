const sequencia = {
    _valor: 1, //usamos _ por convenção a outros programadores
    get valor(){return this._valor++},
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }else{
            console.log('valor menor que a sequencia')
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor)
console.log(sequencia.valor, sequencia.valor)