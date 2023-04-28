export const pss = [
  { range: 1, from: 0, to: 1045, percent: 0.075 },
  { range: 2, from: 1045.01, to: 2089.60, percent: 0.09 },
  { range: 3, from: 2089.61, to: 3134.40, percent: 0.12 },
  { range: 4, from: 3134.41, to: 6101.06, percent: 0.14 },
  { range: 5, from: 6101.07, to: 10448, percent: 0.145 },
  { range: 6, from: 10448.01, to: 20896, percent: 0.165 },
  { range: 7, from: 20896.01, to: 40747.20, percent: 0.19 },
  { range: 8, from: 40747.21, to: 999999.99, percent: 0.22 },
]

export const calculatePSS = (salary: number) => {
  let discount = 0;
  for (let i = 0; i < pss.length; i++) {
    if (salary >= pss[i].from && salary <= pss[i].to) {
      discount += salary * pss[i].percent;
    } else {
      discount += pss[i].to * pss[i].percent;
    }
  }
  return discount;
}