"use client";
import React, { createContext, useState } from "react";
import { WorkOutType } from "../components/types";
interface WorkOutsContextProps {
  plan: WorkOutType[];
  setPlan: React.Dispatch<React.SetStateAction<WorkOutType[]>>;
  saved: WorkOutType[];
  setSaved: React.Dispatch<React.SetStateAction<WorkOutType[]>>;
}
export const WorkOutsContext = createContext<WorkOutsContextProps>({
  plan: [],
  setPlan: () => {},
  saved: [],
  setSaved: () => {},
});
const WorkOutsProvider = ({ children }: { children: React.ReactNode }) => {
  const [plan, setPlan] = useState<WorkOutType[]>([]);
  const [saved, setSaved] = useState<WorkOutType[]>([]);
  const shareData = { plan, setPlan, saved, setSaved };
  return (
    <WorkOutsContext.Provider value={shareData}>
      {children}
    </WorkOutsContext.Provider>
  );
};

export default WorkOutsProvider;
