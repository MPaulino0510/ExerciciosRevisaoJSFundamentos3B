// EXERCÍCIO 06 - FOREACH - CIDADES
// Crie um array com cinco cidades.
// Utilize forEach() para mostrar cada cidade em letras maiúsculas.
//
// Escreva sua solução abaixo:

const cidades = [
    {nome: "Osasco"},
    {nome: "Carapicuíba"},
    {nome: "Barueri"},
    {nome: "São Paulo"},
    {nome: "Ceará"}
];

cidades.forEach((cidade) => {
    console.log(`${cidade.nome}`);
});