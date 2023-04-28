const irpfTable = [
  { range: 1, from: 0, to: 1903.98, percent: 0, discount: 0 },
  { range: 2, from: 1903.99, to: 2826.65, percent: 0.075, discount: 142.8 },
  { range: 3, from: 2826.66, to: 3751.05, percent: 0.15, discount: 354.8 },
  { range: 4, from: 3751.06, to: 4664.68, percent: 0.225, discount: 636.13 },
  { range: 5, from: 4664.69, to: 999999.99, percent: 0.275, discount: 869.36 },
];

const discountPerDependent = 189.59;

export const calculateIRPF = (baseValue: number, numberOfDependents = 0) => {
  let discount = 0;
  let currentRange = 1;

  const newBaseValue = baseValue - (numberOfDependents * discountPerDependent);

  if (newBaseValue < irpfTable[0].to) return 0;

  for (let i = 1; i < irpfTable.length; i++) {
    if (newBaseValue >= irpfTable[i].from) {
      currentRange = i;
      console.log('range', currentRange)
      if (newBaseValue <= irpfTable[i].to) {
        discount +=
          i === 1
            ? parseFloat((newBaseValue * irpfTable[i].percent).toFixed(2))
            : parseFloat(
                (
                  (newBaseValue - irpfTable[i].from) *
                  irpfTable[i].percent
                ).toFixed(2)
              );
      } else {
        if (irpfTable[i].range === 5) {
          discount += parseFloat(
            ((newBaseValue - irpfTable[i].from) * irpfTable[i].percent).toFixed(2)
          );
        } else {
          discount +=
            i === 1
              ? parseFloat((irpfTable[i].to * irpfTable[i].percent).toFixed(2))
              : parseFloat(
                  (
                    (irpfTable[i].to - irpfTable[i].from) *
                    irpfTable[i].percent
                  ).toFixed(2)
                );
        }
      }
    }
  }

  discount -=
    irpfTable[currentRange].discount -
    numberOfDependents * discountPerDependent;

  return discount < 0 ? 0 : parseFloat(discount.toFixed(2));
};
