// EXERCÍCIO 20 - FILTRANDO OBJETOS
// Crie um array com cinco funcionários contendo nome e salario.
// Utilize filter() para selecionar funcionários com salário acima de R$ 3.000.
// Mostre o novo array.
//
// Escreva sua solução abaixo:

const funcionarios = [
    {nome: "Miguel", salario: 6767},
    {nome: "João", salario: 1067},
    {nome: "Arthur", salario: 4000},
    {nome: "Brenda", salario: 2500},
    {nome: "Tardin", salario: 3676},
];

const acima3000 = funcionarios.filter((funcionario) => funcionario.salario >= 3000);

console.log(acima3000);