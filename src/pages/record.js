import Record from "@/components/Record";
import RightRecord from "@/components/RightRecord";
import Layout from "@/components/layout";

function record() {
  return (
    <div className=" bg-[#F3F4F6]  py-6 space-x-1  ">
      <div className="w-[1200px] m-auto flex justify-around">
        <Record />
        <RightRecord />
      </div>
    </div>
  );
}
export default record;

record.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
