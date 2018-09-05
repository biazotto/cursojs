const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })   
}

funcs[2]() // imprime o I valendo 10 porque var NÃO tem coiceito de bloco e ele pega o valor global
funcs[8]() // imprime o I valendo 10 porque var NÃO tem coiceito de bloco e ele pega o valor global


