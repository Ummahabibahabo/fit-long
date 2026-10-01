"use client";
import { createContext, useState } from "react";
import { WorkOutType } from "../components/types";
interface WorkOutsContextProps {
  plan: WorkOutType[];
  setPlan: React.Dispatch<React.SetStateAction<WorkOutType[]>>;
}
export const WorkOutsContext = createContext<WorkOutsContextProps>({
  plan: [],
  setPlan: () => {},
});
const WorkOutsProvider = ({ children }: { children: React.ReactNode }) => {
  const [plan, setPlan] = useState<WorkOutType[]>([]);
  const shareData = { plan, setPlan };
  return (
    <WorkOutsContext.Provider value={shareData}>
      {children}
    </WorkOutsContext.Provider>
  );
};

export default WorkOutsProvider;
