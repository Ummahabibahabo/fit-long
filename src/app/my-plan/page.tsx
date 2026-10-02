"use client";

import { useContext, useState } from "react";
import { WorkOutsContext } from "../context/WorkOutsProvider";

import PlanState from "./PlanState";
import EmptyPlanState from "./EmptyPlanState";
import SelectedButton from "../components/button/SelectedButton";
import WorkOutCard from "../components/cards/WorkOutCard";

const MyPlanPage = () => {
  const [selected, setSelected] = useState(false);
  const { plan, saved } = useContext(WorkOutsContext);
  const currentData = selected ? saved : plan;
  return (
    <div>
      <div className="space-y-3 mt-10 mb-10">
        <h1 className="font-bold text-[30px] text-white">MY PLAN</h1>
        <p className="text-[14px] text-[#8A92A0]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <PlanState selected={selected} setSelected={setSelected}></PlanState>
      <div className="mb-5">
        <SelectedButton
          selected={selected}
          setSelected={setSelected}
        ></SelectedButton>
      </div>
      <div className="mb-5">
        {currentData.length === 0 ? (
          <EmptyPlanState></EmptyPlanState>
        ) : (
          <div className="space-y-5">
            {currentData.map((workOut) => (
              <WorkOutCard
                key={workOut.id}
                workOut={workOut}
                selected={selected}
              ></WorkOutCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPlanPage;
