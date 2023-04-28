export const pss = [
  { range: 1, from: 0, to: 1302, percent: 0.075 },
  { range: 2, from: 1302.01, to: 2571.29, percent: 0.09 },
  { range: 3, from: 2571.30, to: 3856.94, percent: 0.12 },
  { range: 4, from: 3856.95, to: 7507.49, percent: 0.14 },
  { range: 5, from: 7507.50, to: 12856.50, percent: 0.145 },
  { range: 6, from: 12856.51, to: 25712.99, percent: 0.165 },
  { range: 7, from: 25713, to: 50140.33, percent: 0.19 },
  { range: 8, from: 50140.34, to: 999999.99, percent: 0.22 },
]

export const calculatePSS = (salary: number) => {
  let discount = 0;
  for (let i = 0; i < pss.length; i++) {
    if (salary >= pss[i].from) {
      if (salary <= pss[i].to) {
        const value = salary - pss[i].from;
        discount += parseFloat((value * pss[i].percent).toFixed(2));
      } else {
        if (pss[i].range !== 8) {
          const value = pss[i].to - pss[i].from;
          discount += parseFloat((value * pss[i].percent).toFixed(2));
        } else {
          const value = salary - pss[i].from;
          discount += parseFloat((value * pss[i].percent).toFixed(2));
        }
      }
    }
  }
  return parseFloat(discount.toFixed(2));
}