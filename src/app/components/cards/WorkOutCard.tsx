import Image from "next/image";
import { WorkOutType } from "../types";
import CalloriImg from "@/app/assests/Vector.png";
import { IoMdTimer } from "react-icons/io";
import { FaCheck, FaRegStar } from "react-icons/fa";
import Link from "next/link";
import RemoveButton from "../button/RemoveButton";
import MarkAsButton from "../button/MarkAsButton";
interface WorkOutCardProps {
  workOut: WorkOutType;
  selected: boolean;
}
const WorkOutCard = ({ workOut, selected }: WorkOutCardProps) => {
  const { image, name, equipment, duration, caloriesBurned, rating, id } =
    workOut;
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 border-2 border-[#232732] rounded-xl p-4 sm:p-5 bg-[#14171E] shadow-lg">
      {/* left */}
      <div className="flex gap-4 sm:gap-7">
        <Image
          className="rounded-xl object-cover shrink-0"
          src={image}
          alt={name}
          width={145}
          height={80}
        />
        <div className="flex flex-col justify-center min-w-0">
          <h1 className="text-[15px] sm:text-[16px] text-white font-bold uppercase truncate">
            {name}
          </h1>
          <p className="text-[13px] sm:text-[14px] text-[#8A92A0]">
            {equipment}
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-5 text-[#9CA3AF] pt-3">
            <span className="flex justify-center items-center gap-2">
              <IoMdTimer className="text-[#CCFF00]" />
              <p>{`${duration} min`}</p>
            </span>
            <span className="flex justify-center items-center gap-2">
              <Image src={CalloriImg} alt={name} width={16} height={16} />
              <p>{`${caloriesBurned} kcal`}</p>
            </span>
            <span className="flex justify-center items-center gap-2">
              <FaRegStar className="text-[#CCFF00]" /> <p>{rating}</p>
            </span>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex items-center gap-2 sm:gap-3">
        <Link href={`/home/${id}`}>
          <button className="px-3 py-2 rounded-xl border-2 border-[#232732] font-bold text-sm sm:text-base whitespace-nowrap">
            View Details
          </button>
        </Link>
        <MarkAsButton
          key={workOut.id}
          workOut={workOut}
          selected={selected}
        ></MarkAsButton>
        <RemoveButton
          key={workOut.id}
          workOut={workOut}
          selected={selected}
        ></RemoveButton>
      </div>
    </div>
  );
};
export default WorkOutCard;
