// Crie uma função chamada filtrarNumeros que recebe um array de números e uma função de filtro como argumentos. A função filtrarNumeros deve retornar um novo array contendo apenas os números que passam no filtro.

 /* function filtrarNumeros() {
    for (let i in arguments) {
        console.log(arguments[i]);
    }
}

filtrarNumeros(10, 20, 30, 40, 50, 60); */

function filtrarNumeros(numeros, funcaoFiltro) {
    const numerosFiltrados = [];
    
    for (let numero of numeros) {
        if (funcaoFiltro(numero)) {
            numerosFiltrados.push(numero);
        }
    }
    
    return numerosFiltrados;
}

// Exemplo de uso:
const numeros = [10, 20, 30, 40, 50, 60];

function filtroMaiorQue30(numero) {
    return numero > 30;
}

const numerosFiltrados = filtrarNumeros(numeros, filtroMaiorQue30);
console.log(numerosFiltrados); // Saída: [40, 50, 60]



