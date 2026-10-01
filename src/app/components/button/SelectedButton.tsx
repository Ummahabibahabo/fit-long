"use client";
import { useState } from "react";

const SelectedButton = () => {
  const [selected, setSelected] = useState(false);
  const handleSelectedButton = () => {
    setSelected(!selected);
  };
  return (
    <div className="flex justify-between items-center">
      <div className="bg-[#13161D] border border-[#232732] rounded-xl flex gap-5 mt-10 p-4 ">
        <button
          onClick={handleSelectedButton}
          className={
            selected
              ? " text-white font-bold"
              : "bg-[#1F242D] border-4 border-[#232732] rounded-xl px-3 py-2 text-white font-bold"
          }
        >
          Today's Plan
        </button>
        <button
          onClick={handleSelectedButton}
          className={
            selected
              ? "bg-[#1F242D] border-4 border-[#232732] rounded-xl px-3 py-2 text-white font-bold"
              : "text-white font-bold"
          }
        >
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
  );
};

export default SelectedButton;
