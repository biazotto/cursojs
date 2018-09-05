// declarando um Objeto 
 const a = {nome: 'opa'}

 // declando um objeto , recebendo outro objeto

 const b = a

 //B recebe a referencia de onde A está alocado , devido a b estar "apontando" para o mesmo ponto de memória de A

 console.log('Objeto a nome:' + a.nome)
 console.log('Objeto b nome:' + b.nome)

 b.nome = 'OPAOPA' // alterando B altera A também
 
 console.log('Objeto b nome:' + b.nome)
 console.log('Objeto a nome:' + a.nome)

//Undefined e Null

 let valor // não inicializada por padrão é undefined
 console.log(valor) // retorna undefined

 /* 
 Devemos utilizar null para retirar a referencia de algo
 como boa prática não se deve setar nada como undefined
 */

