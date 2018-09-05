for(let i = 0 ; i < 10; i++ ){
    console.log(i)
}

// console.log(i) // NÃO IMPRIME porque let tem coiceito de bloco 


// segundo exemplo

const funcs = []

for (let j = 0; j < 10; j++) {
    funcs.push(function () {
        console.log(j)
    })   
}

funcs[2]() // imprime o j valendo 2 porque let  tem coiceito de bloco e ele armazena o valor de i no momento que foi gravado
funcs[8]() // imprime o j valendo 8 porque let  tem coiceito de bloco e ele armazena o valor de i no momento que foi gravado
