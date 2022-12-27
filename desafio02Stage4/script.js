/* 
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

let students = [
  {
    name: "Jeferson",
    n1: 8,
    n2: 10
  },

  {
    name: "Laura",
    n1: 4,
    n2: 7
  },

  {
    name: "Mateus",
    n1: 7,
    n2: 7
  },

  {
    name: "Ana",
    n1: 5,
    n2: 3
  }
]

// função para a média
let average = function(n1, n2){
  return ((n1 + n2) / 2);
}

function printResult(student) {
  if (average(student.n1, student.n2) >= 7) {
      return `A médio do(a) aluno(a) ${student.name} foi de: ${average(student.n1, student.n2)}. Parabéns, você foi aprovado(a) no concurso!`
  } else {
    return `A médio do(a) aluno(a) ${student.name} foi de: ${average(student.n1, student.n2)}. Infelizmente, não foi dessa vez ${student.name}! Você foi reprovado.`
  };
}

for ( let student of students){
  let averageMssg = printResult(student)
  alert(averageMssg)
}




