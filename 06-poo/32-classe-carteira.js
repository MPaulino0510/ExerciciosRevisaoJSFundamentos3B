// EXERCÍCIO 32 - ENCAPSULAMENTO
// Crie uma classe CarteiraDigital com o campo privado #saldo.
// Crie os métodos adicionarCredito(valor), realizarPagamento(valor) e consultarSaldo().
// Não permita pagamentos maiores que o saldo disponível.
//
// Escreva sua solução abaixo:

class CarteiraDigital{
    #saldo = 0;

    adicionarCredito(valor){
        if(valor > 0){this.#saldo += valor;}
    }
    realizarPagamento(valor){
        if(this.#saldo >= valor && valor > 0) {this.#saldo -= valor;
        return true;
        }
        return false;
    }
    consultarSaldo(){
        console.log(this.#saldo);
        return this.#saldo;
    }
}