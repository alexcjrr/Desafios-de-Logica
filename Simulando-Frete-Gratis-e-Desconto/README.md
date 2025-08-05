# 💸 Aplicação de Desconto e Verificação de Frete Grátis

Este desafio une dois cenários comuns em e-commerces: a aplicação de cupons de desconto e a verificação de frete grátis.

## 🧠 Lógica do Desafio

### 1. Aplicação de Desconto

- O sistema lê o valor da compra e um cupom de desconto.
- Os cupons válidos são:
  - `DESCONTO10`: aplica 10% de desconto.
  - `DESCONTO20`: aplica 20% de desconto.
- Caso o cupom seja inválido, o valor da compra não sofre alteração.
- O valor final é exibido formatado em reais (R$ XX.XX).

### 2. Verificação de Frete Grátis

- Após aplicar o desconto, o sistema verifica se o valor final é superior a R$ 150,00.
  - Se sim, exibe: `"Você ganhou frete grátis!"`.
  - Caso contrário, exibe: `"Frete não incluso."`.

## 📌 Exemplos de Entrada e Saída

| Entrada | Cupom      | Saída                                                         |
| ------- | ---------- | ------------------------------------------------------------- |
| 160.00  | DESCONTO10 | Valor final da compra: R$ 144.00<br>Você ganhou frete grátis! |
| 100.00  | DESCONTO20 | Valor final da compra: R$ 80.00<br>Frete não incluso.         |
| 150.00  | NENHUM     | Valor final da compra: R$ 150.00<br>Frete não incluso.        |
