class Conversor {
    // Método estático que converte metros para quilômetros
    static metrosParaQuilometros(metros) {
        return metros / 1000;
    }

    // Método estático que converte quilômetros para metros
    static quilometrosParaMetros(quilometros) {
        return quilometros * 1000;
    }
}

// Chamadas diretas dos métodos pela classe, sem instâncias
console.log(Conversor.metrosParaQuilometros(1500)); // Saída: 1.5
console.log(Conversor.quilometrosParaMetros(1.5)); // Saída: 1500
