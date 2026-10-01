import HomePageCard from "../components/cards/HomePageCard";
import { WorkOutType } from "../components/types";

const getSingleData = async (): Promise<WorkOutType[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};
const HomePage = async () => {
  const workOutData = await getSingleData();
  // console.log(workOutData);

  return (
    <div className="mt-20">
      <div>
        <h1 className="font-bold text-[30px] text-white">THE LIBRARY</h1>
        <p className="font-normal text-[14px] text-[#9CA3AF] mb-15">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {workOutData.map((workOut) => {
          return (
            <HomePageCard key={workOut.id} workOut={workOut}></HomePageCard>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
