// EXERCÍCIO 30 - SIMULANDO RESPOSTA DE API
// Crie um objeto resposta com as propriedades status, quantidade e clientes.
// A propriedade clientes deve conter um array com dois objetos.
// Converta a resposta para JSON e depois novamente para objeto.
// Mostre o status e os clientes recebidos.
//
// Escreva sua solução abaixo:

const advogados = {
    quantidade: 5,
    status: 200,
    clientes: [
        {id: 1, nome: "Miguel"},
        {id: 2, nome: "Arthur"}
    ]
};

const respostaJson = JSON.stringify(advogados);

const respostaObjeto = JSON.parse(respostaJson);

console.log("Status:", respostaObjeto.status);
console.log("Clientes:", respostaObjeto.clientes);