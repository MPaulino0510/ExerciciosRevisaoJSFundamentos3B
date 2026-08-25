// EXERCÍCIO 27 - OBJETO PARA JSON
// Crie um objeto reserva com codigo, hospede e numeroNoites.
// Converta o objeto para JSON utilizando JSON.stringify()
// e mostre o resultado.
//
// Escreva sua solução abaixo:
const objeto = {
    codigo: 12345,
    hospede: "Miguel",
    numeroNoites: 5
};

const json = JSON.stringify(objeto);
console.log(json);