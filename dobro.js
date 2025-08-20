import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("informe um numero: ", function(num){
    let soma = Number(num) + Number(num);
    console.log("o dobro de " + num + " é " + soma);
    rl.close(); 
  });