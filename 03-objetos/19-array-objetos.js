// EXERCÍCIO 19 - ARRAY DE OBJETOS
// Crie um array com três objetos de jogos.
// Cada jogo deve possuir titulo, plataforma e classificacao.
// Percorra o array e mostre o título e a plataforma de cada jogo.
//
// Escreva sua solução abaixo:


const objetos = [
    {titulo: "Minecraft",  plataforma: "Mojang", classificacao: 14},
    {titulo: "Fortnite",  plataforma: "Epic games", classificacao: 16},
    {titulo: "Roblox",  plataforma: "Roblox studio", classificacao: 10},
];

objetos.forEach((jogo) => {
    console.log(`${jogo.titulo}, da plataforma: ${jogo.plataforma}.`);
})