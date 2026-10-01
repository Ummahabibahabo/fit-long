import { FaCheck } from "react-icons/fa";
import { WorkOutType } from "../types";
import { useContext } from "react";
import { WorkOutsContext } from "@/app/context/WorkOutsProvider";
import { toast } from "react-toastify";
interface MarkAsButtonProps {
  workOut: WorkOutType;
}
const MarkAsButton = ({ workOut }: MarkAsButtonProps) => {
  const { setPlan } = useContext(WorkOutsContext);
  const handleMarkAsButton = () => {
    setPlan((previousMarkPlan) => {
      return previousMarkPlan.map((planMarkData) =>
        planMarkData.id === workOut.id
          ? {
              ...planMarkData,
              status: "done",
            }
          : planMarkData,
      );
    });
    toast.success(`${workOut.name} today's plan is done.`);
  };
  return (
    <button
      onClick={handleMarkAsButton}
      className="px-3 py-2 rounded-xl bg-[#CCFF00] text-black font-bold flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base whitespace-nowrap"
    >
      <FaCheck /> {workOut.status === "done" ? "Done" : "Mark as Done"}
    </button>
  );
};

export default MarkAsButton;
