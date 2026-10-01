"use client";
import { WorkOutsContext } from "@/app/context/WorkOutsProvider";
import { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { WorkOutType } from "../types";
import { toast } from "react-toastify";
interface RemoveButtonProps {
  workOut: WorkOutType;
}
const RemoveButton = ({ workOut }: RemoveButtonProps) => {
  const { setPlan } = useContext(WorkOutsContext);
  const handleRemoveButton = () => {
    setPlan((previousPlan) => {
      return previousPlan.filter((planData) => planData.id !== workOut.id);
    });
    toast.success(`${workOut.name} remove from today's plan.`);
    return;
  };
  return (
    <div>
      <RiDeleteBin6Line
        onClick={handleRemoveButton}
        className="text-white font-extrabold text-xl shrink-1"
      />
    </div>
  );
};

export default RemoveButton;
