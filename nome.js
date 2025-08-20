const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Qual é o seu nome? ", function(nome) {
  console.log("Olá, " + nome + "!");

  rl.question("Quantos anos você tem? ", function(idade) {
    console.log("Você tem " + idade + " anos!");
    rl.close(); 
  });
});
