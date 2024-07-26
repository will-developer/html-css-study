/* ERRADO  
function execucaoOperacao(operacao, numeros) {
    let res = 0;

    if (operacao == soma || operacao == subtracao || operacao == multiplicacao || operacao == divisao) {
        for (let numero of numeros) {
            if (soma) {
                res += numero;
                return;
            } else if (subtracao) {
                res -= numero;
                return;
            } else if (multiplicacao) {
                res *= numero;
                return;
            } else if (divisao) {
                res /= numero;
                return;
            }
        }
        return res;
    }
}

let numeros = [2, 2, 2];

let soma = execucaoOperacao(soma, numeros);
console.log(soma);

console.log("--------------------");

let subtracao = execucaoOperacao(subtracao, numeros);
console.log(subtracao);

console.log("--------------------");

let multiplicacao = execucaoOperacao(multiplicacao, numeros);
console.log(multiplicacao);

console.log("--------------------");

let divisao = execucaoOperacao(divisao, numeros);
console.log(divisao);

console.log("--------------------");


****************************************************************O QUE ESTA ERRADO********
function execucaoOperacao(operacao, numeros) {
    let res = 0;

    if (operacao == soma || operacao == subtracao || operacao == multiplicacao || operacao == divisao) {
        for (let numero of numeros) {
            if (soma) { // Aqui está errado, "soma" é considerado uma variável indefinida, não faz sentido aqui
                res += numero;
                return;
            } else if (subtracao) { // Mesmo problema aqui, com "subtracao"
                res -= numero;
                return;
            } else if (multiplicacao) { // E aqui com "multiplicacao"
                res *= numero;
                return;
            } else if (divisao) { // E aqui com "divisao"
                res /= numero;
                return;
            }
        }
        return res;
    }
}

let numeros = [2, 2, 2];

let soma = execucaoOperacao(soma, numeros); // A mesma questão, "soma" não é uma operação válida aqui
console.log(soma);

// ... (mesmo padrão para subtração, multiplicação e divisão)
*/

// FORMA CORRETA
function execucaoOperacao(operador, numeros) {
    let res = 0; // Começa com zero

    for (let i of numeros) {
        if (operador === "+") {
            res += i; // Soma
        } else if (operador === "-") {
            res -= i; // Subtração
        } else if (operador === "*") {
            if (res === 0) {
                res = 1; // Começa com 1 para multiplicação
            }
            res *= i; // Multiplicação
        } else if (operador === "/") {
            if (res === 0) {
                res = i; // Começa com o primeiro número para divisão
            } else {
                res /= i; // Divisão
            }
        }
    }

    return res;
}

let numeros = [2, 2, 2];

let soma = execucaoOperacao("+", numeros);
console.log("Soma:", soma);

let subtracao = execucaoOperacao("-", numeros);
console.log("Subtração:", subtracao);

let multiplicacao = execucaoOperacao("*", numeros);
console.log("Multiplicação:", multiplicacao);

let divisao = execucaoOperacao("/", numeros);
console.log("Divisão:", divisao);
