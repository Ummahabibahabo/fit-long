"use client";
import { WorkOutsContext } from "@/app/context/WorkOutsProvider";
import { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { WorkOutType } from "../types";
import { toast } from "react-toastify";
interface RemoveButtonProps {
  workOut: WorkOutType;
  selected: boolean;
}
const RemoveButton = ({ workOut, selected }: RemoveButtonProps) => {
  const { setPlan, setSaved } = useContext(WorkOutsContext);
  const handleRemoveButton = () => {
    if (selected) {
      setSaved((previousSaved) => {
        return previousSaved.filter((savedData) => savedData.id !== workOut.id);
      });
      toast.success(`${workOut.name} remove from saved.`);
      return;
    } else {
      setPlan((previousPlan) => {
        return previousPlan.filter((planData) => planData.id !== workOut.id);
      });
      toast.success(`${workOut.name} removed from today's plan`);
    }
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
