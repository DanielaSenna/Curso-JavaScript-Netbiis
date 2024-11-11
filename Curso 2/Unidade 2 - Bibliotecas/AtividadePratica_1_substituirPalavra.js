// Crie uma função substituirPalavra(frase, palavra, novaPalavra) que substitui todas as ocorrências de palavra por novaPalavra na string frase. Por exemplo, substituirPalavra("Eu gosto de JavaScript", "JavaScript", "Python") deve retornar "Eu gosto de Python".

function substituirPalavra(frase, palavra, novaPalavra){
    return frase.replaceAll(palavra, novaPalavra)
}
console.log(substituirPalavra("Eu gosto de JavaScript", "JavaScript", "Python"))
