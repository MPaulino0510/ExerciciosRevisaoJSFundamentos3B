// EXERCÍCIO 11 - SOME - VALORES NEGATIVOS
// Considere os saldos: [120, 50, -20, 300, 75].
// Utilize some() para verificar se existe algum saldo negativo.
// Mostre true ou false.
//
// Escreva sua solução abaixo:

const saldos = [120, 50, -20, 300, 75];

const juntar = saldos.some((n) => n > 0);

console.log(juntar);