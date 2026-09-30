import BannerImg from "@/app/assests/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex-row lg:flex justify-between items-center">
      {/* left side */}
      <div className="space-y-3">
        <h5 className="text [12px] font-bold text-[#C2F800]">
          WORKOUT LIBRARY
        </h5>
        <h1 className="font-extrabold text-[60px] text-white">
          TRAIN WITH INTENT. LOG <br />
          EVERY SET.
        </h1>
        <p className="font-normal text-[12px] text-[#9CA3AF]">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
          <br /> into today's plan, and watch the week's work add up.
        </p>
        <button className="text-[12px] font-bold text-black bg-[#C2F800] px-3 py-2 rounded-xl">
          BROWSE WORKOUTS
        </button>
      </div>
      {/* right side   */}
      <div className="mt-10 lg:m-0">
        <Image src={BannerImg} alt="" width={350} height={350}></Image>
      </div>
    </div>
  );
};

export default Banner;
