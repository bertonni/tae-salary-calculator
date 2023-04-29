/**
 * Calcula imposto de renda dado valor rendimentos tributavel conforme tabela progressiva
 *
 * @params {Number} rendimentos Renda a ser tributada, em R$.
 * @returns {number} imposto a pagar sobre `rendimentos`, em R$.
 **/
export const IRRF = (rendimentos: number): number => {
  // Fonte: https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos/irpf-imposto-de-renda-pessoa-fisica#tabelas-de-incid-ncia-mensal
  const aliquotas = [0, 0.075, 0.15, 0.225, 0.275]; // aliquotas de IR
  const bases = [1903.98, 2826.65, 3751.05, 4664.68, Infinity]; // bases de calculo

  // calcula tamanho das faixas de tributacao conforme rendimentos
  const faixas = bases.map((b, i, arr) => {
    // a faixa atual eh no maximo o valor da base de calculo
    let faixa = Math.min(rendimentos, b);

    // se a base nao for a primeira, precisamos subtrair o valor da base anterior
    if (i !== 0) {
      faixa -= arr[i - 1];
    }

    // bases maiores que rendimentos podem resultar em faixas negativas, por isso zeramos essas
    faixa = Math.max(faixa, 0);

    return faixa;
  });

  // calcula imposto conforme a aliquota de cada faixa e soma ao valor total
  const imposto = faixas.reduce(function (sum, f, i) {
    // calcula imposto da faixa multiplicando sua aliquota
    const impFaixa = f * aliquotas[i];
    return (sum += impFaixa);
  }, 0);

  // imposto a pagar sobre rendimentos
  return imposto;
}