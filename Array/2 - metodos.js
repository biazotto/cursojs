const pilotos = ['vettel', 'alonso', 'raikonen', 'massa']

pilotos.pop() //remove o ultimo elemento do array
pilotos.push('verstappen') //adiciona um elemente na ultima posição
pilotos.shift() //remove o primeiro elemento do array
pilotos.unshift('Hamilton') //adiciona no primeiro elemento

pilotos.splice(1, 0, 'massa', 'botas') // 1 parametro posição , 2 parametro qtd de exclusão, 3 - n parametros são incluídos no array

const pilotos2 = pilotos.slice(2, 4) //cria um novo array a partir do parametro passado como indice e o segundo parametro é o indice final porém não entra
console.log(pilotos)
console.log(pilotos2)
