import React from "react";

interface DisplayResultsProps {
  salary: number;
  totalGains?: number;
  totalDiscounts?: number;
  qualificationIncentive?: number;
  pss: number;
  irrf: number;
  baseIRRF: number;
  basePSS: number;
}

export const DisplayResults = ({
  salary,
  totalGains,
  totalDiscounts,
  qualificationIncentive,
  pss,
  irrf,
  baseIRRF,
  basePSS,
}: DisplayResultsProps) => {
  return (
    <div className="w-full flex items-center justify-center">
      {/* vencimentos */}
      <div className="w-1/2 flex flex-col">
        <span>Vencimento: {salary}</span>
        <span>Bruto: {totalGains}</span>
        <span>Incentivo: {qualificationIncentive}</span>
        <span>Base IRRF: {baseIRRF}</span>
      </div>
      {/* descontos */}
      <div className="w-1/2 flex flex-col">
        <span>PSS: {pss}</span>
        <span>IRRF: {irrf}</span>
        <span>Base PSS: {basePSS}</span>
        <span>Descontos: {totalDiscounts}</span>
      </div>
    </div>
  );
};
