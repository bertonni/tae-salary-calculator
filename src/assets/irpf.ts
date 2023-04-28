export const irpf = [
  { range: 1, from: 0, to: 1903.98, percent: 0, discount: 0 },
  { range: 2, from: 1903.99, to: 2826.65, percent: 0.075, discount: 142.8 },
  { range: 3, from: 2826.66, to: 3751.05, percent: 0.15, discount: 354.8 },
  { range: 4, from: 3751.06, to: 4664.68, percent: 0.225, discount: 636.13 },
  { range: 5, from: 4664.69, to: 999999.99, percent: 0.275, discount: 869.36 },
]

const discountPerDependent = 189.59;

export const calculateIRPF = (baseValue: number, numberOfDependents: number) => {
  const irrf = (baseValue * irpf[0].percent) - irpf[0].discount - (numberOfDependents * discountPerDependent);

  return irrf < 0 ? 0 : irrf;
}