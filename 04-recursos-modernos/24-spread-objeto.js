// EXERCÍCIO 24 - SPREAD EM OBJETO
// Crie um objeto cliente com nome e telefone.
// Utilize Spread para criar um novo objeto que mantenha os dados
// e acrescente a propriedade fidelidade com valor "Ouro".
//
// Escreva sua solução abaixo:

const cliente = {
    nome: "Miguel",
    teletone: "676767-67"
};
const novo = {...cliente, valor: "Ouro"};

console.log(novo);