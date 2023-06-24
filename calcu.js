// Obtém o formulário e o contêiner para exibir o resultado do imposto anual
const formularioImpostoAnual = document.getElementById('formulario-imposto-anual');
const resultadoAnualContainer = document.getElementById('resultado-anual');

// Manipula o evento de envio do formulário para calcular o imposto anual
formularioImpostoAnual.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Obtém a renda anual informada pelo usuário
  const rendaAnual = parseFloat(document.getElementById('renda-anual').value);
  
  // Calcula o valor do imposto anual com base na renda informada
  const valorImpostoAnual = calcularImpostoAnual(rendaAnual);
  
  // Calcula a taxa de imposto com base na renda informada
  const taxaImposto = calcularTaxaImposto(rendaAnual);
  
  // Obtém a faixa de imposto correspondente à taxa de imposto
  const faixaImposto = obterFaixaImposto(taxaImposto);

  // Exibe o resultado do imposto anual no contêiner
  resultadoAnualContainer.textContent = `Imposto devido (Anual): R$ ${valorImpostoAnual.toFixed(2)} (${taxaImposto.toFixed(2)}% - Faixa ${faixaImposto})`;
});

// Obtém o formulário e o contêiner para exibir o resultado do imposto mensal
const formularioImpostoMensal = document.getElementById('formulario-imposto-mensal');
const resultadoMensalContainer = document.getElementById('resultado-mensal');

// Manipula o evento de envio do formulário para calcular o imposto mensal
formularioImpostoMensal.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Obtém a renda mensal informada pelo usuário
  const rendaMensal = parseFloat(document.getElementById('renda-mensal').value);
  
  // Calcula a renda anual com base na renda mensal informada
  const rendaAnual = rendaMensal * 12;
  
  // Calcula o valor do imposto anual com base na renda anual
  const valorImpostoAnual = calcularImpostoAnual(rendaAnual);
  
  // Calcula o valor do imposto mensal dividindo o imposto anual por 12
  const valorImpostoMensal = valorImpostoAnual / 12;
  
  // Calcula a taxa de imposto com base na renda anual
  const taxaImposto = calcularTaxaImposto(rendaAnual);
  
  // Obtém a faixa de imposto correspondente à taxa de imposto
  const faixaImposto = obterFaixaImposto(taxaImposto);

  // Exibe o resultado do imposto mensal no contêiner
  resultadoMensalContainer.textContent = `Imposto devido (Mensal): R$ ${valorImpostoMensal.toFixed(2)} (${taxaImposto.toFixed(2)}% - Faixa ${faixaImposto})`;
});

// Função para calcular o imposto anual com base na renda
function calcularImpostoAnual(renda) {
  let valorImposto = 0;

  if (renda <= 25000) {
    valorImposto = 0;
  } else if (renda <= 40000) {
    valorImposto = (renda - 25000) * 0.075;
  } else if (renda <= 80000) {
    valorImposto = (renda - 40000) * 0.15 + 1875;
  } else if (renda <= 180000) {
    valorImposto = (renda - 80000) * 0.225 + 10125;
  } else {
    valorImposto = (renda - 180000) * 0.275 + 37000;
  }
  
  return valorImposto;
}

// Função para calcular a taxa de imposto com base na renda
function calcularTaxaImposto(renda) {
  if (renda <= 25000) {
    return 0;
  } else if (renda <= 40000) {
    return 7.5;
  } else if (renda <= 80000) {
    return 15;
  } else if (renda <= 180000) {
    return 22.5;
  } else {
    return 27.5;
  }
}

// Função para obter a faixa de imposto correspondente à taxa de imposto
function obterFaixaImposto(taxaImposto) {
  if (taxaImposto === 0) {
    return 'Isento';
  } else if (taxaImposto === 7.5) {
    return 'A';
  } else if (taxaImposto === 15) {
    return 'B';
  } else if (taxaImposto === 22.5) {
    return 'C';
  } else {
    return 'D';
  }
}
