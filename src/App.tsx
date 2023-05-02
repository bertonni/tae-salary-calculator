import { IRRF } from "./assets/irpf";
import { calculatePSS } from "./assets/pss";
import { CareerForm } from "./components/CareerForm";
import { salaryTable } from "./assets/salaryTable";
import { DisplayResults } from "./components/DisplayResults";
import { useState } from "react";

type Inputs = {
  class: string;
  level: string;
  progression: string;
  dependents: number;
  fg: number | "Não"
};

function App() {
  const [data, setData] = useState<Inputs>({
    class: "C",
    level: "1",
    progression: "01",
    dependents: 0,
    fg: "Não"
  });
  const salary = salaryTable[data.class + data.level + data.progression];
  const pss = calculatePSS(salary);
  const fg = data.fg === "Não" ? 0 : data.fg;
  const irrf = parseFloat((IRRF(salary + fg - pss - data.dependents * 189.59).toFixed(2)));

  return (
    <div className="h-screen w-full flex flex-col items-center p-10">
      <h1 className="text-3xl font-medium text-gray-700">
        Simulador de Salário TAE
      </h1>
      <div className="flex items-center justify-center w-full pt-10">
        <CareerForm formData={setData} />
        <div className="w-1/2">
          <DisplayResults
            salary={salary}
            pss={pss}
            irrf={irrf}
            baseIRRF={salary - pss - 2 * 189.59}
            basePSS={salary}
            qualificationIncentive={0}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
