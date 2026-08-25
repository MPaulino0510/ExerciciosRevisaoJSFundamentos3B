// EXERCÍCIO 09 - FIND - ALUNO
// Crie um array de objetos com nome e matrícula de quatro alunos.
// Utilize find() para localizar o aluno com a matrícula 103.
// Mostre o aluno encontrado.
//
// Escreva sua solução abaixo:

const alunos = [
    { nome: "Miguel", matricula: 103 },
    { nome: "Victor", matricula: 203 },
    { nome: "Tiago", matricula: 303 },
    { nome: "Laura", matricula: 403 },
];
const achar = alunos.find((aluno) => aluno.matricula === 103)
console.log(achar);