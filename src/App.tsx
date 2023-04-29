import { IRRF } from "./assets/irpf";
import { calculatePSS } from "./assets/pss";
import { VariablesForm } from "./components/VariablesForm";
import { salaryTable } from "./assets/salaryTable";

function App() {
  const salary = salaryTable['D405'];
  const pss = calculatePSS(salary);
  console.log("pss", pss);
  const irrf = IRRF(salary - pss - 2 * 189.59);

  console.log(irrf.toFixed(2));

  return (
    <div className="h-screen w-full flex flex-col items-center p-10">
      <h1 className="text-3xl font-medium text-gray-700">
        Simulador de Salário TAE
      </h1>
      <VariablesForm />
    </div>
  );
}

export default App;
