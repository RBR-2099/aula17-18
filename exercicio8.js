const arrayOriginal = [10, 25, 30, 45, 50];

// a) Imprime cada um dos valores do array original.
function imprime() {
    for (let i = 0; i < arrayOriginal.length; i++) {
        console.log(arrayOriginal[i]);
    }
}
imprime();

// b) Imprime cada um dos valores do array original divididos por 10.
function imprimeDivide() {
    for (let i = 0; i < arrayOriginal.length; i++) {
        console.log(arrayOriginal[i] / 10);
    }
}
imprimeDivide();

// c) Cria um novo array com os números pares e imprime.
function filtraPares() {
    const arrayPares = [];
    for (let i = 0; i < arrayOriginal.length; i++) {
        if (arrayOriginal[i] % 2 === 0) {
            arrayPares.push(arrayOriginal[i]);
        }
    }
    return arrayPares;
}

function imprimeArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

const arrayPares = filtraPares();
imprimeArray(arrayPares);

// d) Cria um novo array com strings formatadas e imprime.
function arrayString() {
    const novaString = [];
    for (let i = 0; i < arrayOriginal.length; i++) {
        novaString.push(`O elemento do índex ${i} é: ${arrayOriginal[i]}`);
    }
    console.log(novaString);
    return novaString;
}
arrayString();

// e) Imprime o maior e o menor número do array original.
function imprimeMaiorEMenor() {
    let maior = arrayOriginal[0];
    let menor = arrayOriginal[0];
    
    for (let i = 1; i < arrayOriginal.length; i++) {
        if (arrayOriginal[i] > maior) {
            maior = arrayOriginal[i];
        }
        if (arrayOriginal[i] < menor) {
            menor = arrayOriginal[i];
        }
    }
    
    console.log(`O maior número é: ${maior}`);
    console.log(`O menor número é: ${menor}`);
}
imprimeMaiorEMenor();
