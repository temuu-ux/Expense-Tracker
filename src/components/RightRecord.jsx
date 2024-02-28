import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export default function RightRecord() {
  return (
    <div className="w-[894px] flex  flex-col gap-4 ">
      <div className="flex justify-between">
        <div className="flex items-center ">
          <button>
            <MdKeyboardArrowLeft />
          </button>
          <p> Last 30 Days</p>
          <button>
            <MdKeyboardArrowRight />
          </button>
        </div>
        <button className="btn bg-[#F9FAFB]">Newest fisrt</button>
      </div>
      <div>
        <div className="flex justify-between bg-[#FFFFFF] rounded-xl border-solid-1 border-[#E5E7EB]">
          <div className="px-6 py-2 flex justify-between items-center w-[894px]">
            <label className=" cursor-pointer items-center flex space-x-2">
              <input type="checkbox" defaultChecked className="checkbox" />
              <span className="label-text">Select All</span>
            </label>
            <p className="text-[#94A3B8]">- 35,500₮</p>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
