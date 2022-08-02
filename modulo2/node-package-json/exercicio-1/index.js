// Exercicio 1

// a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// com o process.argv[2]

const verificaApresentacao = () => {
  const nome = process.argv[2];
  const idade = Number(process.argv[3]);
  const novaIdade = idade + 7;

  if (nome != undefined) {
    console.log(
      `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`,
    );
  } else {
    console.log('verifique se passou todos os parametros! ');
  }
};

console.log(verificaApresentacao());
