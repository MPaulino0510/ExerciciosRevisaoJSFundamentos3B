// EXERCÍCIO 25 - REST PARAMETERS
// Crie uma função maiorNumero que receba uma quantidade indefinida de números
// utilizando Rest. A função deve retornar o maior valor recebido.
// Teste com pelo menos seis números.
//
// Escreva sua solução abaixo:
function maiorNumero(...numeros) {
  return Math.max(...numeros);
}

console.log(maiorNumero(1, 2, 3, 4, 5, 6));