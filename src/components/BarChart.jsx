import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 3000000 })),
      backgroundColor: "rgba(132, 204, 22, 1)",
      borderRadius: 20,
      barThickness: 15,
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 3000000 })),
      backgroundColor: "rgba(249, 115, 22, 1)",
      borderRadius: 20,
      barThickness: 15,
    },
  ],
};

export const BarChart = () => {
  return (
    <div className="w-[590px]  bg-white rounded-2xl space-y-2  px-6">
      <div className="flex text-center items-center space-y-2 px-6 border-b border-[#E2E8F0] h-[56px]">
        <p className=" text-[#0F172A] text-base not-italic font-semibold">
          Income-Expense
        </p>
      </div>
      <div className="px py  h-[229px]">
        <Bar data={data} />
      </div>
    </div>
  );
};
