const notas = [1, 2, 3, 4, 5, 6, 7]

for (let i in notas){
    console.log(`posição ${i} nota = ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    telefone: 891293,
    idade: 39,
    peso: 64
}

for (let i in pessoa){
    console.log(`atributo = ${i} ///// valor: ${pessoa[i]}`)
}