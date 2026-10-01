"use client";
import { BiCalendarPlus } from "react-icons/bi";
import { WorkOutType } from "../types";
import { useContext } from "react";
import { WorkOutsContext } from "@/app/context/WorkOutsProvider";
import { toast } from "react-toastify";
import Link from "next/link";
interface AddPlanButtonPageProps {
  detailsData: WorkOutType;
}
const AddPlanButtonPage = ({ detailsData }: AddPlanButtonPageProps) => {
  const { plan, setPlan } = useContext(WorkOutsContext);
  const handleAddButton = () => {
    const isAlreadySelected = plan.some(
      (planData) => planData.id === detailsData.id,
    );
    if (isAlreadySelected) {
      toast.warning(`${detailsData.name} is already selected`);
      return;
    }
    setPlan((previousPlan) => {
      return [...previousPlan, detailsData];
    });
    toast.success(`Added to today's plan ${detailsData.name}`);
  };

  return (
    <Link href={"/my-plan"}>
      <button
        onClick={handleAddButton}
        className="flex items-center gap-3 px-3 py-2 bg-[#CCFF00] text-[#0F1115] rounded-xl"
      >
        <BiCalendarPlus className="text-xl stroke-[1]" />
        <p>Add to today's plan</p>
      </button>
    </Link>
  );
};

export default AddPlanButtonPage;
