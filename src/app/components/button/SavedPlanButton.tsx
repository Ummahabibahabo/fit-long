"use client";
import { CiSaveUp2 } from "react-icons/ci";
import { WorkOutType } from "../types";
import { useContext } from "react";
import { WorkOutsContext } from "@/app/context/WorkOutsProvider";
import Link from "next/link";
import { toast } from "react-toastify";
interface SavedPlanButtonProps {
  detailsData: WorkOutType;
}
const SavedPlanButton = ({ detailsData }: SavedPlanButtonProps) => {
  const { saved, setSaved } = useContext(WorkOutsContext);
  const handleSavedButton = () => {
    const isAlreadySelectedSavedData = saved.some(
      (savedData) => savedData.id === detailsData.id,
    );
    if (isAlreadySelectedSavedData) {
      toast.warning(`${detailsData.name} is already selected.`);
      return;
    }
    setSaved((previousSavedData) => {
      return [...previousSavedData, detailsData];
    });
    toast.success(`${detailsData.name} added to saved.`);
  };
  return (
    <Link href={"/my-plan"}>
      <button
        onClick={handleSavedButton}
        className="flex items-center gap-3 text-white px-3 py-2 border border-[#374151] rounded-xl "
      >
        <CiSaveUp2 className="text-white stroke-[1] text-xl" />
        <p>Save for later</p>
      </button>
    </Link>
  );
};

export default SavedPlanButton;
