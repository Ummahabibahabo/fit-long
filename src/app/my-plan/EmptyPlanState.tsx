import Link from "next/link";

const EmptyPlanState = () => {
  return (
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
  );
};

export default EmptyPlanState;
