const valor = 'Global'

function imprimir(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    imprimir()
}

exec()