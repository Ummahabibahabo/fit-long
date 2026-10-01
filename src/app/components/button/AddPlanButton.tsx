import { BiCalendarPlus } from "react-icons/bi";
import { WorkOutType } from "../types";
interface AddPlanButtonPageProps {
  detailsData: WorkOutType;
}
const AddPlanButtonPage = ({ detailsData }: AddPlanButtonPageProps) => {
  return (
    <button className="flex items-center gap-3 px-3 py-2 bg-[#CCFF00] text-[#0F1115] rounded-xl">
      <BiCalendarPlus className="text-xl stroke-[1]" />
      <p>Add to today's plan</p>
    </button>
  );
};

export default AddPlanButtonPage;
