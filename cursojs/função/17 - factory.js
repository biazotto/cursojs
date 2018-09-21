function criarProduto(nome, valor) {
    return {
        nome,
        valor,
        desconto: 01
    }
}

console.log(criarProduto('Leite', 10))