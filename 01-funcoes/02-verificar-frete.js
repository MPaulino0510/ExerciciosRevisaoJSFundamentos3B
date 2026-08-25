// EXERCÍCIO 02 - VERIFICAR FRETE GRÁTIS
// Crie uma função que receba o valor de uma compra e retorne
// "Frete grátis" quando o valor for maior ou igual a R$ 150
// e "Frete pago" nos demais casos.
//
// Escreva sua solução abaixo:

function freteGratis(valor){
    if (valor >= 150){
    console.log("Frete grátis.");
    }
    else
    {
        console.log("Frete pago.");
    }
    }
const resultado = freteGratis(151);
console.log(resultado);