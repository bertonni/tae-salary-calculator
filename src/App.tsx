import { calculateIRPF } from "./assets/irpf";
import { calculatePSS } from "./assets/pss";

function App() {

  const salary = 3078.37
  const pss = calculatePSS(salary);
  const irrf = calculateIRPF(salary - pss, 2);

  console.log(irrf);

  return (
    <div>
      <h1 className="text-3xl">Hello world</h1>
    </div>
  );
}

export default App;
