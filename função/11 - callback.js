const fabricantes = ['BMW', 'mercedes', 'Audi']

function imprimir (nome , indice) {
    console.log(`${indice +1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function (a) {console.log(a)} ) //funcao anomina da pra colocar no forEach
fabricantes.forEach(a => console.log(a)) // o parametro equivale ao valor que tem nos indices