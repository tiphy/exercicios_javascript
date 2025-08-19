import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("informe o primeiro numero: ", function(primeiroNum){
  rl.question("informe o segundo numero: ", function(segundoNum){
    let soma = Number(primeiroNum) + Number(segundoNum);
    console.log("a soma dos numeros é igual a " + soma);
  });
});