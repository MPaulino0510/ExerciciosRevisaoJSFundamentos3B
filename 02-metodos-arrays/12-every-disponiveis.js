// EXERCÍCIO 12 - EVERY - PRODUTOS DISPONÍVEIS
// Considere as quantidades: [4, 2, 7, 1, 6].
// Utilize every() para verificar se todos os produtos possuem estoque maior que zero.
// Mostre true ou false.
//
// Escreva sua solução abaixo:

const produtos = [4, 2, 7, 1, 6];
const positivo = produtos.every((valores) => valores > 0);
console.log(positivo);