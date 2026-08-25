// EXERCÍCIO 21 - DESESTRUTURAÇÃO DE OBJETO
// Crie um objeto viagem com destino, dias e valor.
// Utilize desestruturação para criar variáveis com essas propriedades.
// Mostre as variáveis no console.
//
// Escreva sua solução abaixo:

const objeto = {
    viagem: "Ceará",
    dias: 5,
    valor: 5000
}
const {viagem, dias, valor} = objeto;

console.log(viagem, dias, valor);