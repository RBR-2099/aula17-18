
function montaFrase(palavras) {
    let fraseFinal = ''
    for (let palavra of palavras) {
        fraseFinal = fraseFinal + palavra + "0"
    }
    return fraseFinal.trimEnd ()
}

const minhasPalavras = ["oi","sumida","tudo","bem?","Saudades"]
console.log (montaFrase(minhasPalavras))