function analisarFaturamento(faturamentoDiario) {
  // Remove dias sem faturamento, se faturamento for zero ele não conta
  const faturamentoValido = faturamentoDiario.filter((valor) => valor > 0);

  // Calcula a média anual
  const mediaAnual =
    faturamentoValido.reduce((total, valor) => total + valor, 0) /
    faturamentoValido.length;

  // Encontra o menor e o maior valor
  const menorValor = Math.min(...faturamentoValido);
  const maiorValor = Math.max(...faturamentoValido);

  // Conta os dias acima da média
  const diasAcimaDaMedia = faturamentoValido.filter(
    (valor) => valor > mediaAnual
  ).length;

  return {
    menorValor,
    maiorValor,
    diasAcimaDaMedia,
  };
}

// Array de faturamento
const faturamento = [1000, 2000, 0, 3000, 1500, 0, 2500];
const resultado = analisarFaturamento(faturamento);

console.log("Menor valor:", resultado.menorValor);
console.log("Maior valor:", resultado.maiorValor);
console.log("Dias acima da média:", resultado.diasAcimaDaMedia);
