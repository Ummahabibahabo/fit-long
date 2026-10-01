import WorkOutDetailsCard from "@/app/components/cards/WorkOutDetailsCard";
import { WorkOutType } from "@/app/components/types";
import Image from "next/image";

interface WorkOutDetailsPageProps {
  params: Promise<{ id: string }>;
}
const getSingleDetailsDate = async (id: string): Promise<WorkOutType> => {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  const data = await res.json();
  return data;
};

const WorkOutDetailsPage = async ({ params }: WorkOutDetailsPageProps) => {
  const { id } = await params;
  const detailsData = await getSingleDetailsDate(id);
  console.log(detailsData);

  return (
    <WorkOutDetailsCard
      key={detailsData.id}
      detailsData={detailsData}
    ></WorkOutDetailsCard>
  );
};

export default WorkOutDetailsPage;
