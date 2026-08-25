// EXERCÍCIO 35 - POLIMORFISMO
// Crie uma classe Pagamento com o método processar().
// Crie as classes Pix e Cartao herdando de Pagamento.
// Sobrescreva processar() em cada classe com uma mensagem diferente.
// Coloque as formas de pagamento em um array e execute o método de cada uma.
//
// Escreva sua solução abaixo:

class Pagamento {
  processar() {
    console.log("Processando pagamento genérico...");
  }
}

class Pix extends Pagamento {
  processar() {
    console.log("Pagamento via Pix: Chave validada e valor transferido instantaneamente!");
  }
}

class Cartao extends Pagamento {
  processar() {
    console.log("Pagamento via Cartão: Transação autorizada pela operadora do cartão!");
  }
}

const pagamentos = [
  new Pix(),
  new Cartao(),
  new Pagamento() 
];

pagamentos.forEach(pagamento => pagamento.processar());
