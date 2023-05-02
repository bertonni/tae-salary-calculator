import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  class: string;
  level: string;
  progression: string;
  dependents: number;
  fg: number | "Não";
};

const classes = ["A", "B", "C", "D", "E"];
const levels = ["I", "II", "III", "IV"];
const progressions = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
];

interface CareerFormProps {
  formData: any;
}

const fgs = [
  "FG-1",
  "FG-2",
  "FG-3",
  "FG-4",
  "FG-5",
  "FG-6",
  "FG-7",
  "FG-8",
  "FG-9",
];

const fgValues = [
  1063.31, 715.35, 579.96, 270.83, 219.76, 161.14, 102.77, 76.02, 61.67,
];

export const CareerForm = ({ formData }: CareerFormProps) => {
  const { register, handleSubmit, watch } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  useEffect(() => {
    // let val: string;
    const subscription = watch((value) => {
      formData(value);
    });

    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch]);

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            <label className="font-medium text-gray-700" htmlFor="class">
              Classe
            </label>
            <select
              className="h-10 rounded border px-3 border-gray-700"
              {...register("class")}
              id="class"
            >
              {classes.map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-gray-700" htmlFor="leve">
              Nível
            </label>
            <select
              className="h-10 rounded border px-3 border-gray-700"
              {...register("level")}
              id="level"
            >
              {levels.map((value, index) => (
                <option key={index} value={index + 1}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-gray-700" htmlFor="progression">
              Progressão
            </label>
            <select
              className="h-10 rounded border px-3 border-gray-700"
              {...register("progression")}
              id="progression"
            >
              {progressions.map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col w-28">
            <label className="font-medium text-gray-700" htmlFor="dependents">
              Dependentes
            </label>
            <input
              id="dependents"
              type="number"
              step={1}
              min={0}
              className="h-10 rounded border px-3 border-gray-700"
              {...register("dependents")}
              placeholder="Dependents"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            <label className="font-medium text-gray-700" htmlFor="leve">
              FG
            </label>
            <select
              className="h-10 rounded border px-3 border-gray-700"
              {...register("fg")}
              id="fg"
            >
              <option value={"Não"}>Não</option>
              {fgs.map((value, index) => (
                <option key={index} value={fgValues[index]}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* <input type="submit" value="Enviar" /> */}
      </form>
    </div>
  );
};
