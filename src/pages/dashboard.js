import Card from "../components/Card";
import Income from "@/components/Income";
import TotalExpenses from "@/components/TotalExpenses";
import Dashboard from "@/components/Dashboard";
import Layout from "@/components/layout";

export default function dashboard() {
  return (
    <div className="m-auto bg-[#F3F4F6] ">
      <Dashboard />
    </div>
  );
}

dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
