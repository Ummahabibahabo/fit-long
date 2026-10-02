"use client";

import { FaCheck } from "react-icons/fa";
import { WorkOutType } from "../types";
import { useContext } from "react";
import { WorkOutsContext } from "@/app/context/WorkOutsProvider";
import { toast } from "react-toastify";

interface MarkAsButtonProps {
  workOut: WorkOutType;
  selected: boolean;
}

const MarkAsButton = ({ workOut, selected }: MarkAsButtonProps) => {
  const { setPlan, setSaved } = useContext(WorkOutsContext);

  const handleMarkAsButton = () => {
    if (selected) {
      // Saved থেকে Done করা
      setSaved((previousSaved) => {
        return previousSaved.map((savedData) =>
          savedData.id === workOut.id
            ? {
                ...savedData,
                status: "done",
              }
            : savedData,
        );
      });

      toast.success(`${workOut.name} saved workout is done.`);
    } else {
      // Today's Plan থেকে Done করা
      setPlan((previousPlan) => {
        return previousPlan.map((planData) =>
          planData.id === workOut.id
            ? {
                ...planData,
                status: "done",
              }
            : planData,
        );
      });

      toast.success(`${workOut.name} today's plan is done.`);
    }
  };

  return (
    <button
      onClick={handleMarkAsButton}
      className="px-3 py-2 rounded-xl bg-[#CCFF00] text-black font-bold flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base whitespace-nowrap"
    >
      <FaCheck />

      {workOut.status === "done" ? "Done" : "Mark as Done"}
    </button>
  );
};

export default MarkAsButton;
