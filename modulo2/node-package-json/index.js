// Exercicio 1

// a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?

// const nome = process.argv[2];
// const idade = Number(process.argv[3]);
// const novaIdade = idade + 7;

// const apresentacao = `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`;

// console.log(apresentacao);

// Exercicio 2

// const number1 = Number(process.argv[2]);
// const number2 = Number(process.argv[3]);
// const soma = number1 + number2;
// const subtração = number1 - number2;

// console.log(subtração);

//Exercicio 3

const Tarefas = [process.argv[2], process.argv[3], process.argv[4]];

console.log(Tarefas);
