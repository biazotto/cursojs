// cadeia de prototipos
Object.prototype.attr0 = 'Z' //nao faça isso em casa pq o Object é o pai de todos os objetos
const avo = {attr1: 'herdou do avo pelo __proto__', attr2: 'avo'}
const pai = {__proto__: avo , attr2: 'pai', attr3: 'pai'}
const filho = {__proto__: pai, attr3: 'filho'}

//ele sempre busca "de baixo" pra cima...
console.log(filho.attr1)
console.log(filho.attr0,'/', filho.attr2, '/', filho.attr3, '/' , filho.attr1)

const carro = {
    velAtual: 50,
    velMax: 500,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velAtual){
            this.velAtual += delta
        }else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}


const ferrari = {
    modelo: 'F40',
    velMax: 324, //shadowing
    
}

const volvo = {
     modelo: 'V40',
     status(){
         return `${this.modelo}: ${super.status()}`
     }

}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

console.log(ferrari.status())
console.log(volvo.status())

ferrari.acelerarMais(500)
console.log(ferrari.status())