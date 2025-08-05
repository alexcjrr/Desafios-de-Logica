function calcularDesconto(valorCompra, cupom) {
  let valorFinal = valorCompra;

  if (cupom === "DESCONTO10") {
    valorFinal = valorCompra * 0.9;
  } else if (cupom === "DESCONTO20") {
    valorFinal = valorCompra * 0.8;
  }

  console.log(`Valor final da compra: R$ ${valorFinal.toFixed(2)}`);
}

function calcularFrete(valorCompra) {
  if (valorCompra > 150.0) {
    console.log("Você ganhou frete grátis!");
  } else {
    console.log("Frete não incluso.");
  }
}

// Exemplo de uso:
const valorCompra = 160.0;
const cupom = "DESCONTO10";

calcularDesconto(valorCompra, cupom);
calcularFrete(
  valorCompra *
    (cupom === "DESCONTO10" ? 0.9 : cupom === "DESCONTO20" ? 0.8 : 1)
);
