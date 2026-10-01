import Image from "next/image";
import { WorkOutType } from "../types";
import { BiCalendarPlus } from "react-icons/bi";
import { CiSaveUp2 } from "react-icons/ci";
import AddPlanButtonPage from "../button/AddPlanButton";
interface WorkOutDetailsCardProps {
  detailsData: WorkOutType;
}

const WorkOutDetailsCard = ({ detailsData }: WorkOutDetailsCardProps) => {
  const {
    image,
    name,
    description,
    muscleGroups,
    equipment,
    difficulty,
    sets,
    reps,
    duration,
    caloriesBurned,
    rating,
    instructions,
    id,
  } = detailsData;
  return (
    <div className=" flex flex-col lg:flex-row gap-10">
      <div>
        <Image src={image} alt={name} width={588} height={773}></Image>
      </div>
      <div className="space-y-4">
        <h1 className="font-bold text-[36px] text-white">
          BARBELL BENCH PRESS
        </h1>
        <p className="text-[16px] font-normal text-[#9CA3AF]">{description}</p>
        <div className="flex gap-7">
          {muscleGroups.map((muscle, index) => (
            <button
              key={index}
              className="px-3 py-2 bg-[#CCFF00] font-semibold text-[12px] text-[#0F1115] rounded-xl"
            >
              {muscle}
            </button>
          ))}
        </div>
        <div className="bg-[#161920] border border-[#252932] rounded-xl">
          <div className=" flex justify-between items-center font-bold text-[12px] text-[#9CA3AF] border-b border-[#252932] px-5 py-2 ">
            <span>
              <p className="uppercase">Equipment</p>
            </span>
            <span>{equipment}</span>
          </div>
          <div className=" flex justify-between items-center font-bold text-[12px] text-[#9CA3AF] border-b border-[#252932] px-5 py-2 ">
            <span>
              <p className="uppercase">difficulty</p>
            </span>
            <span>{difficulty}</span>
          </div>
          <div className=" flex justify-between items-center font-bold text-[12px] text-[#9CA3AF] border-b border-[#252932] px-5 py-2 ">
            <span>
              <p className="uppercase">sets</p>
            </span>
            <span>{sets}</span>
          </div>
          <div className=" flex justify-between items-center font-bold text-[12px] text-[#9CA3AF] border-b border-[#252932] px-5 py-2 ">
            <span>
              <p className="uppercase">reps</p>
            </span>
            <span>{reps}</span>
          </div>
          <div className=" flex justify-between items-center font-bold text-[12px] text-[#9CA3AF] border-b border-[#252932] px-5 py-2 ">
            <span>
              <p className="uppercase">duration</p>
            </span>
            <span>{`${duration} min`}</span>
          </div>
          <div className=" flex justify-between items-center font-bold text-[12px] text-[#9CA3AF] border-b border-[#252932] px-5 py-2 ">
            <span>
              <p className="uppercase">calories</p>
            </span>
            <span>{`${caloriesBurned} kcal`}</span>
          </div>
          <div className=" flex justify-between items-center font-bold text-[12px] text-[#9CA3AF] border-b border-[#252932] px-5 py-2 ">
            <span>
              <p className="uppercase">rating</p>
            </span>
            <span>{rating}</span>
          </div>
        </div>
        <div>
          <div className="space-y-4">
            <h1 className="font-extrabold text-[16px] text-white uppercase">
              instructions
            </h1>
            <ol className="list-decimal pl-5 space-y-3 text-[14px] text-[#D1D5DB] font-normal">
              {instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
          <div className="flex gap-5 mt-7 font-semibold text-[14px]">
            <AddPlanButtonPage
              key={id}
              detailsData={detailsData}
            ></AddPlanButtonPage>

            <button className="flex items-center gap-3 text-white px-3 py-2 border border-[#374151] rounded-xl ">
              <CiSaveUp2 className="text-white stroke-[1] text-xl" />
              <p>Save for later</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOutDetailsCard;
