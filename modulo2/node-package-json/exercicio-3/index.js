//Exercicio 3

const Tarefas = ['Comprar comida', 'Estudar', 'Ver filme'];
const AdicionarTarefa = () => {
  Tarefas.push(process.argv[2]);
  console.log('Tarefa adicionada com sucesso!');
  console.log(Tarefas);
};

console.log(AdicionarTarefa());
