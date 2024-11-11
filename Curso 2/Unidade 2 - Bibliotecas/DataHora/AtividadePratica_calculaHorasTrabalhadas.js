// Implemente a função calculaHorasTrabalhadas(horaEntrada, horaSaida) que recebe o horário de entrada e de saída de um trabalhador (formato hh:mm) e retorna o número total de horas e minutos trabalhados.

function calculaHorasTrabalhadas(horaEntrada, horaSaida) {
    // Divide a hora e minuto de entrada
    const [entradaHora, entradaMinuto] = horaEntrada.split(":").map(Number);
    const [saidaHora, saidaMinuto] = horaSaida.split(":").map(Number);

    // Converte a hora de entrada e saída para minutos totais
    const entradaEmMinutos = entradaHora * 60 + entradaMinuto;
    const saidaEmMinutos = saidaHora * 60 + saidaMinuto;

    // Calcula a diferença em minutos
    let diferencaEmMinutos = saidaEmMinutos - entradaEmMinutos;

    // Converte a diferença para horas e minutos
    const horasTrabalhadas = Math.floor(diferencaEmMinutos / 60);
    const minutosTrabalhados = diferencaEmMinutos % 60;

    return { horas: horasTrabalhadas, minutos: minutosTrabalhados };
}

const { horas, minutos } = calculaHorasTrabalhadas("08:30", "17:45");
console.log(`Total de horas trabalhadas: ${horas} horas e ${minutos} minutos`);