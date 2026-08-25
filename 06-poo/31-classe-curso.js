// EXERCÍCIO 31 - CLASSE E INSTÂNCIAS
// Crie uma classe Curso com constructor para nome, duracao e modalidade.
// Crie um método exibirInformacoes() e duas instâncias da classe.
// Mostre os dados dos dois cursos.
//
// Escreva sua solução abaixo:

class Curso{
    constructor(nome, duracao, modalidade){
        this.nome = nome;
        this.duracao = duracao;
        this.modalidade = modalidade;
    }
    exibirInformacoes(){
        console.log(this.nome, this.duracao, this.modalidade);
    }
}

const curso1 = new Curso("Senai", 50, "DS");
const curso2 = new Curso("Etec", 20, "DS");

curso1.exibirInformacoes();
curso2.exibirInformacoes();