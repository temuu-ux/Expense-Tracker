import Income from "@/components/Income";
import TotalExpenses from "@/components/TotalExpenses";
import Card from "./Card";
import LastRecord from "./LastRecords";
import { DoughnutChart } from "./DoughnatChart";
import { BarChart } from "./BarChart";

export default function Dashboard() {
  return (
    <div className="m-auto text-[#71717A] w-[1280px]">
      <div className="flex  justify-around p-8">
        <Card />
        <Income />
        <TotalExpenses />
      </div>
      <div className="p-8 flex  justify-around">
        <BarChart />
        <DoughnutChart />
      </div>
      <div className="p-8 justify-center flex items-center  ">
        <LastRecord />
      </div>
    </div>
  );
}
