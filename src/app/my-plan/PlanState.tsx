import { useContext } from "react";
import { WorkOutsContext } from "../context/WorkOutsProvider";
interface PlanStateProps {
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
}
const PlanState = ({ selected }: PlanStateProps) => {
  const { plan, saved } = useContext(WorkOutsContext);
  const currentData = selected ? saved : plan;

  const totalMinutes = currentData.reduce(
    (total, workOut) => total + workOut.duration,
    0,
  );
  const totalCalories = currentData.reduce(
    (total, workOut) => total + workOut.caloriesBurned,
    0,
  );
  return (
    <div className="bg-[#13161D] border border-[#232732] flex justify-between p-5 mt-10 rounded-xl">
      <div className="flex flex-col items-center border-r-2 border-[#232732] w-1/3 p-7">
        <span className="text-[14px] text-[#8A92A0]">Exercise</span>
        <span className="font-bold text-[36px] text-white">
          {currentData.length}
        </span>
      </div>
      <div className="flex flex-col items-center border-r-2 border-[#232732] w-1/3 p-7">
        <span className="text-[14px] text-[#8A92A0]">Minutes</span>
        <span className="font-bold text-[36px] text-white">{totalMinutes}</span>
      </div>
      <div className="flex flex-col items-center  w-1/3 p-7">
        <span className="text-[14px] text-[#8A92A0]">Calories</span>
        <span className="font-bold text-[36px] text-white">
          {totalCalories}
        </span>
      </div>
    </div>
  );
};

export default PlanState;
