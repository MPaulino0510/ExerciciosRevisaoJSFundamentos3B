// EXERCÍCIO 18 - UTILIZANDO THIS
// Crie um objeto curso com nome, modalidade e um método descrever().
// O método deve utilizar this e retornar uma frase com os dados do curso.
//
// Escreva sua solução abaixo:

const curso = {
    nome:"Senai",
    modalidade: "TI",
    descrever(){
        console.log(`O nome do curso é ${this.nome}, a modalidade é: ${this.modalidade}`);
    }
}
curso.descrever();