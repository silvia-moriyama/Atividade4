function maior(num1,num2,num3){

const maior = Math.max(num1, num2, num3);

console.log("O maior numero e " + maior);

}



const prompt = require("prompt-sync")();

const num1 = parseFloat(prompt("Digite o primeiro numero: "));
const num2 = parseFloat(prompt("Digite o segundo numero: "));
const num3 = parseFloat(prompt("Digite o terceiro numero: "));

maior(num1,num2,num3);