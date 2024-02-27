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
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
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
      <div className="px-6 py-8 h-[229px]">
        <Bar data={data} />
      </div>
    </div>
  );
};
