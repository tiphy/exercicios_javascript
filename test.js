var x = 10;
let y = 20;
 if (true) {
 var x = 30; // Escopo global da função
 let y = 40; // Escopo do bloco
 console.log("Dentro do if:", x, y);
 }
 console.log("Fora do if:", x, y);
