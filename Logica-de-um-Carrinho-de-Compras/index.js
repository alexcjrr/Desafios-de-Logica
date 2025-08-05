let estoque = 5;
let carrinho = [];

// Simulação de entrada
let operacaoEstoque = 2; // 1 para adicionar, 2 para retirar
let quantidadeEstoque = 4;
let numeroDeProdutos = 3;
let produtos = ["pão", "leite", "açúcar"];

// Controle de estoque
if (operacaoEstoque === 1) {
  estoque += quantidadeEstoque;
  console.log("Estoque atualizado:", estoque);
} else if (operacaoEstoque === 2) {
  if (quantidadeEstoque <= estoque) {
    estoque -= quantidadeEstoque;
    console.log("Estoque atualizado:", estoque);
  } else {
    console.log("Estoque insuficiente");
  }
}

// Simulação do carrinho de compras
for (let i = 0; i < numeroDeProdutos; i++) {
  carrinho.push(produtos[i]);
}

console.log("Carrinho final: " + carrinho.join(", "));
