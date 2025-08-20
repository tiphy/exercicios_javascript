import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("informe a primeira nota: ", function(primeiroNum){
    rl.question("informe a segunda nota: ", function(segundoNum){
        rl.question("informe a terceira nota: ", function(terceiroNum){  
            let meida = (Number(primeiroNum) + Number(segundoNum) + Number(terceiroNum)) / 3;
            console.log("a media é " + meida);
            rl.close(); 
        });
    });
});