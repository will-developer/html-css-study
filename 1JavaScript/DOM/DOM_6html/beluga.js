function calcularMedia() {
    var total = 0;
    var qtd = arguments.length;
    var x = 0;
    while (typeof arguments[x] === "number") {
        total += arguments[x];
        x++;
    }

    var res = total / qtd;

    return res.toFixed(2);
}

function sortear(n) {
    var nSorteado = Math.random();
    console.log(nSorteado);
    return nSorteado;
}
