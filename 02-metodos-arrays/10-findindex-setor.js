// EXERCÍCIO 10 - FINDINDEX - SETOR
// Crie um array com os setores: Vendas, Financeiro, TI e RH.
// Utilize findIndex() para descobrir a posição de "TI".
// Mostre o índice encontrado.
//
// Escreva sua solução abaixo:

let setores = ["Vendas", "Financeiro", "TI", "RH"];
const indice = setores.findIndex((n) => n === "TI");

console.log(indice);