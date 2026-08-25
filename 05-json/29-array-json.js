// EXERCÍCIO 29 - ARRAY EM JSON
// Crie um array com três objetos de tarefas contendo id, descricao e concluida.
// Converta o array para JSON e mostre o resultado.
//
// Escreva sua solução abaixo:

const objetos = [
    {id: 1, descricao: "Objeto bacana", concluida: true},
    {id: 2, descricao: "Objeto mau", concluida: true},
    {id: 3, descricao: "Objeto aleatório", concluida: false},
];
const jsonResultado = JSON.stringify(objetos);

console.log(jsonResultado);

