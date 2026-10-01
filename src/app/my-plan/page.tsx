import Link from "next/link";

const MyPlanPage = () => {
  return (
    <div>
      <div className="space-y-3 mt-10 mb-10">
        <h1 className="font-bold text-[30px] text-white">MY PLAN</h1>
        <p className="text-[14px] text-[#8A92A0]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <div className="bg-[#13161D] border border-[#232732] flex justify-between p-5 mt-10 rounded-xl">
        <div className="flex flex-col border-r-2 border-[#232732] w-1/3 p-7">
          <span className="text-[14px] text-[#8A92A0]">Exercise</span>
          <span className="font-bold text-[36px] text-[#CCFF00]">0</span>
        </div>
        <div className="flex flex-col border-r-2 border-[#232732] w-1/3 p-7">
          <span className="text-[14px] text-[#8A92A0]">Minutes</span>
          <span className="font-bold text-[36px] text-white">0</span>
        </div>
        <div className="flex flex-col  w-1/3 p-7">
          <span className="text-[14px] text-[#8A92A0]">Calories</span>
          <span className="font-bold text-[36px] text-white">0</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="bg-[#13161D] border border-[#232732] rounded-xl flex gap-5 mt-10 p-4">
          <button>Today's Plan</button>
          <button className="bg-[#1F242D] border border-[#232732] rounded-xl px-3 py-2">
            Saved
          </button>
        </div>
        <div className="flex justify-between items-center gap-6">
          <p className="text-[14px] text-[#8A92A0] font-bold">Sort By</p>
          <button className="bg-[#1F242D] border border-[#232732] rounded-xl px-3 py-2">
            Duration
          </button>
        </div>
      </div>
      <div className="bg-[#13161D] border border-dashed border-[#232732] text-center rounded-xl p-15 mt-10 space-y-3">
        <h1 className="font-bold text-[20px] text-white">NOTHING HERE YET</h1>
        <p className="font-normal text-[14px] text-[#A1A1AA]">
          Browse the library and add a lift to get today moving.
        </p>
        <Link href={"/"}>
          <button className="px-3 py-1 text-[14px] text-black font-semibold bg-[#C2F10D] rounded-xl">
            Go to Workouts
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyPlanPage;
