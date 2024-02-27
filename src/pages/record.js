import Record from "@/components/Record";
import RightRecord from "@/components/RightRecord";
function record() {
  return (
    <div className="m-auto bg-[#F3F4F6]  py-6 space-x-1 flex justify-between">
      <Record />
      <RightRecord />
    </div>
  );
}
export default record;
