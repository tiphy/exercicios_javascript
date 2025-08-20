import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("informe um numero: ", function(num){
    let triplo = Number(num) * 3;
    console.log("o triplo de " + num + " é " + triplo);
    rl.close(); 
  });