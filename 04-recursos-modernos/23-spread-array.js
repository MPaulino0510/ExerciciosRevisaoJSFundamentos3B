// EXERCÍCIO 23 - SPREAD EM ARRAY
// Crie um array de convidados da família e outro de amigos.
// Utilize Spread para criar um terceiro array contendo todos os convidados.
//
// Escreva sua solução abaixo:

const convidados = [
    "Miguel",
    "Tardin",
    "Brenda"
];
const amigos = [
    "Victória",
    "João",
    "Andrew"
];
const atualizado = [...convidados, ...amigos];

console.log(atualizado);