// Crie uma função tempoPassado(data) que recebe uma data e retorna quanto tempo passou desde aquela data, em dias, horas e minutos. Se ele receber uma data futura, crie um erro personalizado e passe.

function tempoPassado(data) {
    const dataPassada = new Date(data);
    const agora = new Date();

    // Verifica se a data fornecida é futura
    if (dataPassada > agora) {
        throw new Error("Erro: A data fornecida é no futuro.");
    }

    // Calcula a diferença em milissegundos
    const diferencaEmMilissegundos = agora - dataPassada;

    // Converte a diferença para dias, horas e minutos
    const dias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60)) / (1000 * 60));

    return `${dias} dias, ${horas} horas e ${minutos} minutos`;
}

try {
    const data = "1996-11-02T11:30:00";
    console.log(tempoPassado(data));
} catch (error) {
    console.log(error.message);
}
