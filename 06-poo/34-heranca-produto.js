// EXERCÍCIO 34 - HERANÇA E SUPER
// Crie uma classe Produto com nome, preço e um método exibirDados().
// Crie a classe ProdutoDigital que herde de Produto e receba também o tamanhoArquivo.
// Utilize super() no constructor e sobrescreva exibirDados() incluindo o tamanho.
//
// Escreva sua solução abaixo:

class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  exibirDados() {
    console.log(`Nome: ${this.nome}, Preço: R$ ${this.preco}`);
  }
}

class ProdutoDigital extends Produto {
  constructor(nome, preco, tamanhoArquivo) {
    super(nome, preco);
    this.tamanhoArquivo = tamanhoArquivo;
  }

  exibirDados() {
    super.exibirDados();
    console.log(`Tamanho do Arquivo: ${this.tamanhoArquivo}`);
  }
}

const meuLivro = new ProdutoDigital("E-book de JavaScript", 49.90, "15 MB");
meuLivro.exibirDados();
