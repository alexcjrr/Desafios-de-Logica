# 💰 Sistema de Self-Checkout com Desconto

## 📋 Descrição

Este projeto simula um sistema de autoatendimento (self-checkout) para um supermercado. O cliente informa o preço de três produtos, e o sistema realiza os seguintes passos:

1. Calcula o valor total da compra somando os três produtos.
2. Aplica um **desconto de 10%** se o valor total da compra for **maior que R$ 100,00**.
3. Exibe o valor total e, se aplicável, o valor com desconto no formato apropriado.

Este desafio tem como objetivo praticar conceitos fundamentais da programação, como:

- Variáveis
- Leitura de dados do usuário
- Conversão de tipos (string para número)
- Estruturas condicionais
- Operações matemáticas
- Saída formatada

---

## 🧮 Exemplo de Funcionamento

### 🔸 Entrada:

```
Produto 1: 50.00
Produto 2: 60.00
Produto 3: 10.00
```

### ✅ Saída:

```
Total da compra: R$ 120.00
Valor com desconto: R$ 108.00
```

---

## 📌 Regras de Negócio

- Se o total da compra for **maior que R$ 100,00**, aplica-se um desconto de 10%.
  - Fórmula: `total * 0.90`
- Caso contrário, o valor permanece o mesmo.

---

## 🧠 Lógica Aplicada

```javascript
// Solicita os preços dos três produtos ao usuário
const readline = require("readline-sync");

let preco1 = parseFloat(
  readline.question("Digite o preço do primeiro produto: R$ ")
);
let preco2 = parseFloat(
  readline.question("Digite o preço do segundo produto: R$ ")
);
let preco3 = parseFloat(
  readline.question("Digite o preço do terceiro produto: R$ ")
);

// Calcula o total
let total = preco1 + preco2 + preco3;

// Exibe o valor total
console.log("Total da compra: R$ " + total.toFixed(2));

// Verifica e aplica desconto se necessário
if (total > 100) {
  let valorFinal = total * 0.9;
  console.log("Valor com desconto: R$ " + valorFinal.toFixed(2));
} else {
  console.log("Valor sem desconto: R$ " + total.toFixed(2));
}
```

---

## 🛠 Tecnologias

- JavaScript
- Node.js
- readline-sync (para entrada de dados no terminal)

---
