function showPattern(x) {
    for (let i = 1; i <= x; i++) {
        console.log('*'.repeat(i));
    }
}

function showReversePattern(x) {
    for (let i = x; i > 0; i--){
        console.log('*'.repeat(i));
    }
}

function showFullPattern(x) {
    showPattern(x);
    showReversePattern(x - 1);
}

const N = 4;
console.log("Padrão Crescente:");
showPattern(N);

console.log("\nPadrão Decrescente:");
showReversePattern(N);

console.log("\nPadrão Completo:");
showFullPattern(N);
