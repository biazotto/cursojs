const escola = "Cod3r"

//Retornando o valor de character em determinada posição (se passar posição que não existe retornar vazio)
console.log(escola.charAt(4)) // começa no indice 0 ... vai retornar o r 

//retorna o valor do char na tabela ASCI/UNICODE
console.log(escola.charCodeAt(3)) // retornar 51 que é o valor na tabela

//Retornar em qual posição está determinado "valor"
console.log(escola.indexOf('3')) // retornar que está na posição 3

// Retornar a partir de determinada posição
console.log(escola.substring(1)) // vai retornar od3r (a parti da posição 1)
console.log(escola.substring(0, 3)) // vai do 0 até o 2 (não inclui o 3)

// Concatenando Strings
console.log('Escola '.concat(escola).concat("!!!!"))
console.log('Escola ' + (escola) + (" !!!!"))


// substituindo determinado caracter por outro
console.log(escola.replace(3, 'e')) // vai retornar coder

//Gerar um array
console.log('Ana,Joao,Mateus'.split(',')) // retorna um array 


