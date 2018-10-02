function area(altura, largura){
    const area = altura * largura
    if(area > 20 ){
        console.log(`Valor da área é ${area}m2.`)
    }else{
        return area
    }
}

console.log(area())
console.log(area(2, 3, 4))
console.log(area(2))
console.log(area(10, 30))