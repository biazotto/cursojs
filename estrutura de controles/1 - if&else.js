function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('aprovado arromnado nota: ' + nota)
    }
}

soBoaNoticia(7)
soBoaNoticia(6)

function seForVerdadeEuFalo(valor){ 
    if(valor){ //VERIFICAR SE É TRUE OU FALSE
        console.log('É verdade... ' + valor)
    }else{
        console.log('É falso... ' + valor)
    }
}

seForVerdadeEuFalo() //false
seForVerdadeEuFalo(null) //false
seForVerdadeEuFalo(undefined) //false
seForVerdadeEuFalo(NaN) //false
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0) //false
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})