import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { salaryTable } from "../assets/salaryTable";

type Inputs = {
  class: string;
  level: string;
  progression: string;
  dependents: number;
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

export const VariablesForm = () => {
  const { register, handleSubmit, watch } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  useEffect(() => {
    let val: string;
    const subscription = watch((value) => {
      val = `${value.class}${value.level}${value.progression}`;
      console.log(salaryTable[val]);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
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
        <input
          type="number"
          step={1}
          {...register("dependents")}
          placeholder="Dependents"
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
