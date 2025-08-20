import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("informe um numero: ", function(num){
    let metade = Number(num) / 2;
    console.log("a metade de " + num + " é " + metade);
    rl.close(); 
  });