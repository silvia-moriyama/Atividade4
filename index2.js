
const prompt = require("prompt-sync")();

const n = parseFloat(prompt("Digite o primeiro numero: "));
const m = parseFloat(prompt("Digite o segundo numero: "));

    for (let i = 1; i <= m; ++i)
        console.log(n + " * " + i +
            " = " + n * i);