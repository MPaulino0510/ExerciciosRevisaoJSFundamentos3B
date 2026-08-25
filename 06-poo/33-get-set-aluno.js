// EXERCÍCIO 33 - GETTERS E SETTERS
// Crie uma classe Aluno com o campo privado #nota.
// Crie get nota e set nota. O setter deve aceitar somente valores entre 0 e 10.
// Crie um aluno, altere sua nota e mostre o resultado.
//
// Escreva sua solução abaixo:

class Aluno{
    #nota;

    constructor(nota){
        this.nota = nota;
    }
    get nota(){
        return this.#nota;
    }
    set nota(valor){
        if(valor > 0 && valor <= 10){
            this.#nota = valor;
            } else {
                console.log("Nota inválida! Deve ser entre 0 e 10.");
            };
    }
}

const aluno1 = new Aluno(8);
console.log("Nota inicial:", aluno1.nota);

aluno1.nota = 9.5;
console.log("Nota alterada:", aluno1.nota);

aluno1.nota = 15;
