const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let precos = [];
let contador = 0;

function perguntarPreco() {
  rl.question(`Digite o preço do produto ${contador + 1}: `, (input) => {
    const preco = parseFloat(input);

    if (isNaN(preco)) {
      console.log("Por favor, digite um valor numérico válido.");
      perguntarPreco(); // Pergunta novamente
      return;
    }

    precos.push(preco);
    contador++;

    if (contador < 3) {
      perguntarPreco(); // Continua perguntando até 3 produtos
    } else {
      const total = precos.reduce((soma, valor) => soma + valor, 0);
      console.log("Total da compra: R$ " + total.toFixed(2));

      if (total > 100) {
        const valorComDesconto = total * 0.9;
        console.log("Valor com desconto: R$ " + valorComDesconto.toFixed(2));
      } else {
        console.log("Valor sem desconto: R$ " + total.toFixed(2));
      }

      rl.close();
    }
  });
}

perguntarPreco();
