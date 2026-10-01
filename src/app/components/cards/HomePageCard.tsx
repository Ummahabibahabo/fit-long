import Image from "next/image";
import { IoMdTime } from "react-icons/io";
import CalloriImg from "@/app/assests/Vector.png";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";
interface HomePageCardProps {
  workOut: WorkOutType;
}

const HomePageCard = ({ workOut }: HomePageCardProps) => {
  const {
    image,
    muscleGroups,
    name,
    equipment,
    duration,
    caloriesBurned,
    rating,
    id,
  } = workOut;
  return (
    <Link href={`/home/${id}`}>
      <div className="border-2 border-gray-800 space-y-5 rounded-xl bg-[#20242E] shadow-2xl">
        <div className="overflow-hidden object-cover rounded-xl">
          <Image
            src={image}
            alt={name}
            width={390}
            height={190}
            className="w-full h-[400px] object-cover"
          ></Image>
        </div>

        <div className="p-5 space-y-4">
          <div className="flex gap-5 text-[12px] text-black font-bold">
            {muscleGroups.map((muscle) => (
              <button
                key={muscle}
                className="bg-[#C2F800] rounded-xl px-3 py-2"
              >
                {muscle}
              </button>
            ))}
          </div>
          <h1 className="font-bold text-white text-[18px] uppercase">{name}</h1>
          <p className="font-normal text-[12px] text-[#9CA3AF]">{equipment}</p>
          <div className="flex gap-5 text-[#9CA3AF] border-t-1 border-gray-700 pt-3">
            <span className="flex justify-center items-center gap-3">
              <IoMdTime />
              <p>{duration}</p>
            </span>
            <span className="flex justify-center items-center gap-3">
              <Image src={CalloriImg} alt={name} width={16} height={16}></Image>
              <p>{caloriesBurned}</p>
            </span>
            <span className="flex justify-center items-center gap-3">
              <FaRegStar />
              <p>{rating}</p>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomePageCard;
