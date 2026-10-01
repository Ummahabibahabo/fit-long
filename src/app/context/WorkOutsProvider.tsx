"use client";
import { createContext, useState } from "react";

export const WorkOutsContext = createContext({});
const WorkOutsProvider = ({ children }) => {
  const [plan, setPlan] = useState([]);
  const shareData = { plan, setPlan };
  return (
    <WorkOutsContext.Provider shareData={shareData}>
      {children}
    </WorkOutsContext.Provider>
  );
};

export default WorkOutsProvider;
