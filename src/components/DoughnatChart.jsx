import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export const DoughnutChart = () => {
  const data = {
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className="w-[590px]  bg-white rounded-xl">
      <div className="flex justify-between py-4 px-6 border-b border-[#E2E8F0] h-[56px]">
        <div className="font-semibold text-[#0F172A]">Income-Expense</div>
        <div>Jun 1 - Nov 30</div>
      </div>
      <div className="py-8 px-6 flex gap-12 w-[540px] ">
        <div className="w-[155px] h-[155px] ">
          <Doughnut data={data} />
        </div>
        <div className="w-[337px] flex flex-col space-y-2">
          <div className="flex justify-between">
            <div className="w-[100px] flex items-center gap-2">
              <div className=" bg-[#0166FF] rounded-full w-3 h-3"></div>
              <div>Bills</div>
            </div>
            <div className="">5’000’000₮</div>
            <div>15,50%</div>
          </div>
          <div className="flex justify-between">
            <div className="flex w-[100px] items-center gap-2">
              <div className=" bg-[#E74694] rounded-full w-3 h-3"></div>
              <div>Food</div>
            </div>
            <div>5’000’000₮</div>
            <div>15,50%</div>
          </div>
          <div className="flex justify-between">
            <div className="flex w-[100px] items-center gap-2">
              <div className=" bg-[#FDBA8C] rounded-full w-3 h-3"></div>
              <div>Shopping</div>
            </div>
            <div>5’000’000₮</div>
            <div>15,50%</div>
          </div>
          <div className="flex justify-between">
            <div className="flex w-[100px] items-center gap-2">
              <div className=" bg-[#16BDCA] rounded-full w-3 h-3"></div>
              <div>Insurance</div>
            </div>
            <div>5’000’000₮</div>
            <div>15,50%</div>
          </div>
          <div className="flex justify-between">
            <div className="flex w-[100px] items-center gap-2">
              <div className=" bg-[#F2901C] rounded-full w-3 h-3"></div>
              <div>Clothing</div>
            </div>
            <div>5’000’000₮</div>
            <div>15,50%</div>
          </div>
        </div>
      </div>
    </div>
  );
};
